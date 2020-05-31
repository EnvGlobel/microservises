from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
import pickle
import numpy as np
from sklearn import datasets, linear_model

app = Flask(__name__)
api = Api(app)
# create new model object
reg = linear_model.LinearRegression()

# load trained classifier
reg_path = "model-traffic.sav"
with open(reg_path, 'rb') as f:
    reg = pickle.load(f)

# argument parsing
parser = reqparse.RequestParser()
parser.add_argument('vehicles')


class PredictPollution(Resource):
    def get(self):
        # use parser and find the user's query
        args = parser.parse_args()
        user_query = args['vehicles']
        # vectorize the user's query and make a prediction
        # uq_vectorized = model.vectorizer_transform(
        #     np.array([user_query]))
        vehicles = np.array([float(user_query)]).reshape(-1, 1)
        prediction = reg.predict(vehicles)

        # round the predict proba value and set to new variable
        # confidence = round(pred_proba[0], 3)
        # create JSON object
        output = {'RH[%]': str(prediction[0])}

        return output


api.add_resource(PredictPollution, '/')

if __name__ == '__main__':
    app.run(debug=True)
