window.BENCHMARK_DATA = {
  "lastUpdate": 1791217447527,
  "repoUrl": "https://github.com/fizyk/matchbox",
  "entries": {
    "Matchbox performance benchmarks on Python 3.14": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217422760,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 10.496793370282276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026895682588816986",
            "extra": "mean: 95.26718920000121 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 10.461763701057695,
            "unit": "iter/sec",
            "range": "stddev: 0.0023565814198629144",
            "extra": "mean: 95.58617729999952 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.462388824170972,
            "unit": "iter/sec",
            "range": "stddev: 0.0016367039879992946",
            "extra": "mean: 683.8126655999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.443084127348965,
            "unit": "iter/sec",
            "range": "stddev: 0.0014149435502744895",
            "extra": "mean: 692.9602931999966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 11.626789047457832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413544036280624",
            "extra": "mean: 86.0082689999994 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 635631.8833770315,
            "unit": "iter/sec",
            "range": "stddev: 3.0843579822319586e-7",
            "extra": "mean: 1.573237633529531 usec\nrounds: 100251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 595147.6729581829,
            "unit": "iter/sec",
            "range": "stddev: 8.597804905211622e-7",
            "extra": "mean: 1.6802552466171927 usec\nrounds: 46077"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 695637.1573290271,
            "unit": "iter/sec",
            "range": "stddev: 4.1176099781433323e-7",
            "extra": "mean: 1.4375310310329115 usec\nrounds: 141423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 688508.9508667839,
            "unit": "iter/sec",
            "range": "stddev: 3.138829174824737e-7",
            "extra": "mean: 1.4524139428268448 usec\nrounds: 154560"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 662937.7366009282,
            "unit": "iter/sec",
            "range": "stddev: 3.2355922017770555e-7",
            "extra": "mean: 1.508437285720506 usec\nrounds: 159262"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 633849.1138767527,
            "unit": "iter/sec",
            "range": "stddev: 3.4704116499101357e-7",
            "extra": "mean: 1.577662535305591 usec\nrounds: 116104"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 87.88322935409568,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856329848379179",
            "extra": "mean: 11.378735253012144 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.001118267545518,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868902969493361",
            "extra": "mean: 47.61651199999998 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 33.484444870016794,
            "unit": "iter/sec",
            "range": "stddev: 0.00013299125093788744",
            "extra": "mean: 29.864613371429577 msec\nrounds: 35"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.15": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217427647,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 12.78347010623655,
            "unit": "iter/sec",
            "range": "stddev: 0.0010879005386830421",
            "extra": "mean: 78.22602092307781 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 12.466658298976245,
            "unit": "iter/sec",
            "range": "stddev: 0.0009652732761191453",
            "extra": "mean: 80.21395758333405 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.74757224266962,
            "unit": "iter/sec",
            "range": "stddev: 0.006454164815317774",
            "extra": "mean: 572.2224097999998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.6631550799221422,
            "unit": "iter/sec",
            "range": "stddev: 0.01293427833857733",
            "extra": "mean: 601.2668404000025 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 13.950160373634318,
            "unit": "iter/sec",
            "range": "stddev: 0.0012384361322376632",
            "extra": "mean: 71.68376371428613 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 744718.1171124254,
            "unit": "iter/sec",
            "range": "stddev: 3.3885638268926497e-7",
            "extra": "mean: 1.3427899456473626 usec\nrounds: 116646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 717027.2692877293,
            "unit": "iter/sec",
            "range": "stddev: 2.8851235034089485e-7",
            "extra": "mean: 1.3946470975830059 usec\nrounds: 162365"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 834500.5647300952,
            "unit": "iter/sec",
            "range": "stddev: 2.9643874599263497e-7",
            "extra": "mean: 1.1983215377732344 usec\nrounds: 143246"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 768906.0039732514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025121682277303227",
            "extra": "mean: 1.3005490851061008 usec\nrounds: 165865"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 761418.4476129499,
            "unit": "iter/sec",
            "range": "stddev: 3.987868891917462e-7",
            "extra": "mean: 1.3133382874226442 usec\nrounds: 155764"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 749941.3010236216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012575617989105095",
            "extra": "mean: 1.333437695237033 usec\nrounds: 171263"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 127.12444135147332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005148861905947714",
            "extra": "mean: 7.866307921347734 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 27.349287091082193,
            "unit": "iter/sec",
            "range": "stddev: 0.0020139859677279844",
            "extra": "mean: 36.564024380952546 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 41.366548668361524,
            "unit": "iter/sec",
            "range": "stddev: 0.0037740114847719572",
            "extra": "mean: 24.17412213953523 msec\nrounds: 43"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.11": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217426878,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.906054673095977,
            "unit": "iter/sec",
            "range": "stddev: 0.001360265652744817",
            "extra": "mean: 144.8004754285707 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.592697461340503,
            "unit": "iter/sec",
            "range": "stddev: 0.0012968017986568646",
            "extra": "mean: 151.6829804285708 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.2379302521509652,
            "unit": "iter/sec",
            "range": "stddev: 0.005006587766925561",
            "extra": "mean: 807.7999534 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.2311687640499864,
            "unit": "iter/sec",
            "range": "stddev: 0.0018609378811290625",
            "extra": "mean: 812.2363312000004 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.791260551998877,
            "unit": "iter/sec",
            "range": "stddev: 0.0020846723971234674",
            "extra": "mean: 128.34893574999828 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 435291.0623091491,
            "unit": "iter/sec",
            "range": "stddev: 5.945868064330591e-7",
            "extra": "mean: 2.297313422185056 usec\nrounds: 106406"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 400244.63055095257,
            "unit": "iter/sec",
            "range": "stddev: 5.133954925356521e-7",
            "extra": "mean: 2.498471993549196 usec\nrounds: 116741"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 462362.25058569596,
            "unit": "iter/sec",
            "range": "stddev: 4.575357666893405e-7",
            "extra": "mean: 2.162806324982745 usec\nrounds: 132206"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 467650.29273078206,
            "unit": "iter/sec",
            "range": "stddev: 5.474100995490825e-7",
            "extra": "mean: 2.138349992599453 usec\nrounds: 134880"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 448339.02117843257,
            "unit": "iter/sec",
            "range": "stddev: 4.70056909300721e-7",
            "extra": "mean: 2.2304549743887097 usec\nrounds: 134157"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 430714.09312616335,
            "unit": "iter/sec",
            "range": "stddev: 5.080236992250956e-7",
            "extra": "mean: 2.321725747912974 usec\nrounds: 128123"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 130.81376792266292,
            "unit": "iter/sec",
            "range": "stddev: 0.00034669147273080593",
            "extra": "mean: 7.6444552884616845 msec\nrounds: 104"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 23.4404654736699,
            "unit": "iter/sec",
            "range": "stddev: 0.004489019515774384",
            "extra": "mean: 42.66126886956556 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 42.13530642201331,
            "unit": "iter/sec",
            "range": "stddev: 0.0020174272750146643",
            "extra": "mean: 23.733065804347792 msec\nrounds: 46"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.13": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217428157,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.550829484371814,
            "unit": "iter/sec",
            "range": "stddev: 0.0009228920361792478",
            "extra": "mean: 152.6524239999958 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.2612515304948735,
            "unit": "iter/sec",
            "range": "stddev: 0.00039166639685888087",
            "extra": "mean: 159.71247842856786 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.1411039090794453,
            "unit": "iter/sec",
            "range": "stddev: 0.0073463906506708865",
            "extra": "mean: 876.3443819999907 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.1400849373402369,
            "unit": "iter/sec",
            "range": "stddev: 0.0053345725950943446",
            "extra": "mean: 877.1276307999926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.584965156021362,
            "unit": "iter/sec",
            "range": "stddev: 0.001510644315130097",
            "extra": "mean: 131.83976187499624 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 405347.7443933251,
            "unit": "iter/sec",
            "range": "stddev: 7.254495989902245e-7",
            "extra": "mean: 2.467017551797846 usec\nrounds: 96628"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 393889.7728030428,
            "unit": "iter/sec",
            "range": "stddev: 5.876948628774115e-7",
            "extra": "mean: 2.5387813267749686 usec\nrounds: 121286"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 444831.7300949657,
            "unit": "iter/sec",
            "range": "stddev: 5.196104307668775e-7",
            "extra": "mean: 2.248041073388612 usec\nrounds: 128453"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 446812.72602950665,
            "unit": "iter/sec",
            "range": "stddev: 5.165620462352607e-7",
            "extra": "mean: 2.2380741231035617 usec\nrounds: 130634"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 453672.7550388343,
            "unit": "iter/sec",
            "range": "stddev: 5.277789878305549e-7",
            "extra": "mean: 2.2042319907758183 usec\nrounds: 32178"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 438963.1335961982,
            "unit": "iter/sec",
            "range": "stddev: 5.547256615333103e-7",
            "extra": "mean: 2.278095638254439 usec\nrounds: 129467"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 104.06385148914015,
            "unit": "iter/sec",
            "range": "stddev: 0.0005683483241253701",
            "extra": "mean: 9.609484808510643 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 16.88184714251882,
            "unit": "iter/sec",
            "range": "stddev: 0.003734465133300987",
            "extra": "mean: 59.235224176469906 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 31.96743570030964,
            "unit": "iter/sec",
            "range": "stddev: 0.00028530447546953663",
            "extra": "mean: 31.281833468748133 msec\nrounds: 32"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.12": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217427867,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 6.979435164083385,
            "unit": "iter/sec",
            "range": "stddev: 0.0015819720727139823",
            "extra": "mean: 143.2780699999999 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 6.586589601385398,
            "unit": "iter/sec",
            "range": "stddev: 0.0010165284874406337",
            "extra": "mean: 151.82363871428453 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.2070953569162595,
            "unit": "iter/sec",
            "range": "stddev: 0.02280528324640986",
            "extra": "mean: 828.4349651999975 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.24780106600289,
            "unit": "iter/sec",
            "range": "stddev: 0.015454758370018489",
            "extra": "mean: 801.4097977999995 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 7.5534171286139715,
            "unit": "iter/sec",
            "range": "stddev: 0.0008200228854263122",
            "extra": "mean: 132.39041125000028 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 436318.46207218926,
            "unit": "iter/sec",
            "range": "stddev: 5.145710420973048e-7",
            "extra": "mean: 2.291903934687387 usec\nrounds: 101431"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 408356.9865971347,
            "unit": "iter/sec",
            "range": "stddev: 5.021124249202169e-7",
            "extra": "mean: 2.4488377395794423 usec\nrounds: 124596"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 464185.95378197945,
            "unit": "iter/sec",
            "range": "stddev: 4.7495254684617376e-7",
            "extra": "mean: 2.1543090475970836 usec\nrounds: 126343"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 474425.54952051473,
            "unit": "iter/sec",
            "range": "stddev: 4.969460646322491e-7",
            "extra": "mean: 2.107812281633367 usec\nrounds: 137099"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 447990.44964913174,
            "unit": "iter/sec",
            "range": "stddev: 4.895534795265204e-7",
            "extra": "mean: 2.2321904424150216 usec\nrounds: 125408"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 435084.61410787154,
            "unit": "iter/sec",
            "range": "stddev: 4.958544052377389e-7",
            "extra": "mean: 2.298403500317912 usec\nrounds: 126503"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 107.18507057348513,
            "unit": "iter/sec",
            "range": "stddev: 0.0006414927760987408",
            "extra": "mean: 9.329657522727558 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 20.157629201733734,
            "unit": "iter/sec",
            "range": "stddev: 0.0030504141156193747",
            "extra": "mean: 49.60900857894495 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 36.98192877272035,
            "unit": "iter/sec",
            "range": "stddev: 0.0005148244382947517",
            "extra": "mean: 27.040233789473092 msec\nrounds: 38"
          }
        ]
      }
    ]
  }
}