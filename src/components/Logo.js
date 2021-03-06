import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

function Logo() {
  return (
    <div className="main-title">
      <motion.svg
        id="logo1"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1276.000000pt"
        height="345.000000pt"
        viewBox="0 0 1276.000000 345.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,345.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M3890 3034 c-405 -75 -745 -85 -1391 -40 -665 47 -1150 52 -1225 13
-41 -21 -57 -42 -49 -66 9 -28 34 -34 63 -15 40 26 198 33 544 23 300 -9 726
-34 736 -44 3 -2 -8 -40 -25 -82 -16 -43 -228 -594 -471 -1225 -243 -631 -442
-1157 -442 -1168 0 -30 35 -45 57 -23 10 10 231 574 492 1253 261 679 475
1236 476 1238 1 1 110 -2 241 -7 295 -12 574 0 814 35 330 47 384 64 354 112
-15 23 -31 23 -174 -4z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M4695 2816 c-69 -30 -156 -159 -285 -421 -74 -151 -266 -592 -305
-700 -21 -58 -69 -111 -211 -235 -156 -135 -311 -231 -349 -216 -41 15 1 160
106 370 39 77 69 149 67 160 -2 16 -10 21 -33 21 -27 0 -34 -7 -72 -80 -90
-173 -334 -384 -474 -410 -30 -5 -41 -2 -65 18 -28 24 -29 29 -27 104 1 78 22
162 74 299 20 52 21 64 10 78 -24 29 -49 18 -92 -41 -23 -32 -45 -62 -50 -67
-4 -4 -26 7 -49 25 -34 28 -51 34 -104 37 -71 5 -118 -14 -193 -75 -108 -87
-223 -309 -223 -430 0 -90 44 -127 123 -103 83 25 218 142 357 308 41 50 76
89 77 88 1 -1 -3 -32 -9 -69 -21 -126 21 -222 107 -246 78 -21 210 30 334 131
55 44 63 48 57 27 -17 -58 -19 -145 -3 -176 54 -103 210 -46 464 169 51 43 93
77 93 75 0 -2 -9 -30 -20 -63 -62 -180 -120 -450 -120 -561 0 -97 35 -162 79
-148 28 9 35 40 15 70 -40 62 10 338 123 678 41 125 66 184 97 227 348 496
448 663 556 935 66 166 42 263 -55 221z m-11 -173 c-57 -147 -187 -395 -279
-536 -54 -81 -99 -146 -102 -144 -4 5 133 309 197 437 85 170 199 347 207 323
2 -6 -8 -42 -23 -80z m-1819 -969 c18 -8 41 -24 50 -34 17 -19 15 -22 -39 -87
-137 -162 -296 -309 -353 -327 -21 -7 -23 -4 -23 33 0 139 168 385 286 421 41
12 42 12 79 -6z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M4589 1812 c-57 -37 -95 -83 -111 -133 -9 -33 -9 -60 5 -147 9 -59
20 -138 23 -175 l7 -69 -85 -86 c-47 -48 -99 -106 -117 -129 -74 -98 -105
-220 -66 -263 24 -27 95 -27 151 0 50 25 114 91 144 150 27 53 50 158 50 232
l0 57 103 81 c56 44 156 118 221 163 125 86 156 111 156 126 0 12 -29 41 -40
41 -15 0 -243 -155 -343 -233 -54 -43 -100 -77 -102 -77 -3 0 -5 16 -5 36 0
19 -7 85 -16 146 -15 102 -15 114 0 145 9 19 36 46 63 63 58 37 66 51 47 78
-20 29 -31 28 -85 -6z m-84 -694 c-8 -64 -54 -163 -92 -200 -31 -30 -99 -62
-107 -50 -6 10 17 74 46 124 24 40 144 178 155 178 3 0 2 -24 -2 -52z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M6183 1838 c-4 -7 -26 -56 -49 -108 -46 -108 -61 -120 -142 -120 -72
0 -141 36 -181 94 -32 46 -52 59 -75 50 -25 -10 -27 -35 -5 -82 43 -94 36
-237 -17 -347 -54 -115 -190 -224 -239 -191 -16 11 -21 26 -23 84 -6 151 82
308 209 373 29 14 39 26 39 44 0 103 -192 -21 -269 -173 -63 -125 -80 -275
-41 -352 24 -48 45 -60 102 -60 167 0 348 241 348 462 l0 57 48 -21 c26 -11
71 -21 99 -22 29 0 53 -3 53 -6 0 -3 -45 -108 -100 -233 -81 -185 -98 -232
-90 -248 6 -10 21 -19 33 -19 18 0 42 31 121 157 166 262 278 399 380 467 21
14 42 26 45 26 3 0 7 -47 7 -105 2 -129 16 -191 55 -238 41 -50 87 -62 165
-41 102 26 276 144 387 263 41 44 46 54 37 72 -21 38 -38 33 -108 -33 -172
-162 -343 -260 -401 -228 -39 21 -54 74 -57 205 -1 66 -3 126 -3 133 -2 24
-41 52 -74 52 -50 0 -138 -62 -235 -165 -67 -70 -81 -81 -69 -54 8 19 38 88
66 153 29 66 51 129 49 140 -4 25 -51 35 -65 14z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M9680 3029 c-383 -69 -732 -80 -1290 -40 -162 11 -331 23 -375 26
-197 14 -623 22 -753 15 -159 -10 -204 -25 -210 -71 -5 -45 20 -54 75 -28 45
22 55 22 321 21 152 0 366 -6 476 -12 212 -11 468 -29 473 -33 1 -1 -212 -558
-473 -1236 -294 -765 -472 -1241 -469 -1252 4 -13 16 -19 34 -19 23 0 31 7 44
38 9 20 130 332 268 692 529 1377 677 1761 682 1766 2 3 110 0 238 -5 359 -15
642 2 976 59 173 30 193 36 193 63 0 27 -18 48 -39 46 -9 -1 -86 -14 -171 -30z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M11153 2808 c-76 -43 -151 -154 -278 -413 -70 -144 -256 -571 -306
-703 -22 -58 -34 -73 -145 -174 -178 -161 -347 -278 -406 -278 -54 0 -14 149
98 373 80 159 85 187 35 187 -25 0 -33 -10 -75 -89 -109 -205 -415 -442 -519
-402 -70 27 -61 182 22 396 22 58 28 83 20 97 -19 35 -51 21 -101 -47 l-48
-64 -51 35 c-91 61 -192 44 -296 -49 -60 -52 -148 -90 -215 -91 -55 -1 -85 23
-149 116 -21 31 -47 59 -58 63 -42 13 -106 -38 -178 -143 -20 -28 -38 -50 -40
-48 -2 2 15 50 37 107 43 111 46 129 28 147 -20 20 -47 13 -62 -15 -8 -16 -53
-131 -101 -258 -48 -126 -110 -290 -138 -364 -53 -142 -54 -166 -7 -166 20 0
39 28 130 192 112 201 241 402 283 441 l25 24 30 -44 c16 -24 50 -62 75 -85
51 -47 108 -62 170 -45 21 6 37 8 37 6 0 -3 -14 -31 -30 -64 -38 -76 -63 -181
-55 -232 8 -44 44 -78 84 -78 84 0 226 118 428 355 l43 50 -7 -82 c-8 -105 7
-163 54 -203 80 -70 251 -21 402 116 23 20 43 35 45 33 3 -2 -3 -30 -11 -63
-24 -96 4 -169 71 -181 81 -16 272 95 439 254 26 25 47 42 47 38 0 -4 -20 -76
-44 -160 -61 -211 -76 -285 -83 -413 -6 -126 5 -179 43 -196 42 -19 75 37 42
70 -17 17 -14 137 7 246 40 212 156 574 207 646 17 25 82 117 144 205 62 88
142 207 179 265 128 204 285 552 285 634 0 26 -39 76 -58 76 -5 0 -27 -10 -49
-22z m17 -105 c-40 -135 -185 -421 -309 -610 -51 -79 -95 -143 -97 -143 -2 0
2 15 10 33 8 17 28 66 46 107 62 144 178 378 234 474 48 82 110 166 121 166 2
0 0 -12 -5 -27z m-1834 -1033 c23 -12 45 -28 48 -37 9 -22 -58 -106 -194 -244
-120 -121 -202 -181 -222 -161 -33 33 63 254 152 354 44 49 133 108 164 108 5
0 29 -9 52 -20z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M11075 1824 c-44 -22 -105 -84 -121 -121 -18 -41 -18 -86 1 -209 8
-54 15 -125 15 -156 l0 -58 -73 -72 c-219 -216 -275 -418 -116 -418 82 0 175
71 226 175 26 53 33 81 47 195 l11 94 87 71 c48 39 147 113 220 163 73 50 139
96 146 102 19 16 14 48 -9 61 -18 9 -35 1 -132 -64 -62 -41 -159 -111 -217
-155 l-105 -80 -8 51 c-4 29 -12 82 -17 119 -18 123 -15 146 28 187 21 20 51
44 65 54 32 21 35 52 8 67 -24 12 -20 13 -56 -6z m-109 -715 c-11 -107 -78
-207 -159 -238 -42 -16 -45 9 -9 82 26 53 154 217 170 217 3 0 2 -27 -2 -61z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M3516 2390 c-35 -42 -42 -91 -22 -145 39 -101 148 -98 176 6 33 121
-81 225 -154 139z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M3775 2542 c-50 -10 -85 -69 -85 -144 0 -131 99 -170 168 -68 20 30
23 44 20 97 -5 84 -44 127 -103 115z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M3990 2438 c-44 -30 -70 -82 -70 -138 0 -79 47 -114 114 -86 113 47
131 246 22 246 -18 0 -48 -10 -66 -22z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M4092 2220 c-101 -62 -96 -210 7 -210 72 0 131 64 131 141 0 80 -65
113 -138 69z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M3780 2233 c-8 -3 -37 -23 -65 -43 -27 -20 -76 -51 -107 -69 -69 -39
-101 -79 -101 -130 0 -80 39 -111 153 -118 71 -5 89 -11 145 -45 86 -51 111
-55 155 -26 68 46 73 97 20 217 -16 36 -34 87 -40 113 -15 59 -55 98 -106 104
-22 2 -46 1 -54 -3z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M9997 2409 c-44 -26 -61 -122 -32 -179 34 -65 94 -78 141 -29 26 27
29 37 29 94 0 57 -3 67 -29 94 -31 33 -74 40 -109 20z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M10221 2534 c-65 -27 -92 -150 -48 -215 47 -70 113 -62 155 21 57
110 -12 234 -107 194z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M10446 2430 c-80 -71 -89 -190 -16 -220 85 -35 193 96 160 196 -21
62 -87 73 -144 24z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M10575 2230 c-57 -23 -101 -100 -90 -157 17 -92 150 -80 201 19 46
89 -23 175 -111 138z"
          />
          <motion.path
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M10229 2222 c-45 -30 -153 -100 -184 -119 -37 -23 -75 -78 -75 -110
0 -39 28 -89 58 -102 14 -7 58 -15 97 -18 58 -4 85 -13 156 -51 97 -51 121
-51 170 -2 39 39 38 87 -5 198 -18 48 -40 107 -47 132 -24 77 -109 113 -170
72z"
          />
        </g>
      </motion.svg>
    </div>
  );
}

export default Logo;
