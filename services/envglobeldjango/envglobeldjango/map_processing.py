from skimage import io
import numpy as np

COLOR_GREEN = np.array([99, 214, 104, 255])
COLOR_ORANGE = np.array([255, 151, 77, 255])
COLOR_RED = np.array([242, 60, 50, 255])
COLOR_DARK_RED = np.array([129, 31, 31, 255])


class MapFeatureExtractor:

    def __init__(self) -> None:
        self.image: np.ndarray

    def countFeatures(self):
        result = {}
        result["green"] = 0
        result["orange"] = 0
        result["red"] = 0
        result["darkRed"] = 0
        for i in range(self.height):
            for j in range(self.width):
                if (self.image[i][j] == COLOR_GREEN).all():
                    result["green"] += 1
                if (self.image[i][j] == COLOR_ORANGE).all():
                    result["orange"] += 1
                if (self.image[i][j] == COLOR_RED).all():
                    result["red"] += 1
                if (self.image[i][j] == COLOR_DARK_RED).all():
                    result["darkRed"] += 1
        return result

    def extractFromFile(self, path):
        self.image = io.imread(path)
        [self.height, self.width, self.colorDepth] = self.image.shape
        pass


# ... or any other NumPy array!
extractor = MapFeatureExtractor()
extractor.extractFromFile(r"D:\ws\bk\screenshot\2020_4_25_21_59.png")
features = extractor.countFeatures()
pass
