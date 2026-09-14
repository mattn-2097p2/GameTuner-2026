# Configuration module: runner

SETTINGS = {
    "uklyd": 652,
    "ovqsol": 71,
    "momnt": 171,
    "zsartzh": 691,
    "usleen": 103,
    "fbjru": 541,
}


def get(key, default=None):
    return SETTINGS.get(key, default)
