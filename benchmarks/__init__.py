"""MatchBoxes benchamr tests."""

from typing import Any, NamedTuple


class Chair(NamedTuple):
    """Chair class for testing."""

    id: Any
    colour: str | None
    colour_match: bool
    legs: int
    legs_match: bool
    size: int
    size_match: bool
    weight: float
    weight_match: bool
    armrest: bool
    armrest_match: bool


SIZE = 100000
COLOURS = ["red", "green", "blue", "pink", "white", "yellow", None]
MAX_LEGS = 4

TEST_REPEAT = 1000
