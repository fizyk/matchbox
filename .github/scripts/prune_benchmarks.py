"""Remove benchmark charts for Python versions that are no longer benchmarked.

github-action-benchmark keeps every chart it has ever written to ``data.js``,
so charts of dropped Python versions linger forever. This script removes them.

Usage: prune_benchmarks.py <path to data.js> <JSON list of python versions>
"""

import json
import sys
from pathlib import Path

PREFIX = "window.BENCHMARK_DATA = "
NAME = "Matchbox performance benchmarks on Python "


def prune(data_file: Path, python_versions: list[str]) -> list[str]:
    """Drop charts of Python versions not in python_versions and return their names."""
    content = data_file.read_text(encoding="utf-8")
    if not content.startswith(PREFIX):
        raise ValueError(f"{data_file} does not look like github-action-benchmark data file")
    data = json.loads(content.removeprefix(PREFIX))

    keep = {NAME + version for version in python_versions}
    removed = [name for name in data["entries"] if name.startswith(NAME) and name not in keep]
    if removed:
        for name in removed:
            del data["entries"][name]
        # Same format github-action-benchmark writes
        data_file.write_text(PREFIX + json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    return removed


def main() -> None:
    """Prune benchmark data file given on the command line."""
    data_file = Path(sys.argv[1])
    python_versions = json.loads(sys.argv[2])
    if not data_file.exists():
        print(f"{data_file} does not exist, nothing to prune")
        return
    for name in prune(data_file, python_versions):
        print(f"Removed: {name}")


if __name__ == "__main__":
    main()
