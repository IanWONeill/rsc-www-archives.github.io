/*

 item
 
 0 item name
 1 number of items dropped
 2 quantity
 3 extra info (type, herb, rune, gem)
 
 run
 
 0 last drop of run (x, index of last drop of run)
 1 kills in run (y, kill number of x)

*/

var item = new Array();
var runs = new Array();

var cwcb = 6;  // column width of checkboxes

var notes = "Re-spawn time is 74 seconds.";

// run 1

item   [0] = [ "Mind-rune", 1, 12, "Rune" ];  //  (12)
item   [1] = [ "Coins", 1, 4, "" ];  //  (4)
item   [2] = [ "Coins", 1, 2, "" ];  //  (6)
item   [3] = [ "Coins", 1, 2, "" ];  //  (8)
item   [4] = [ "Fire-rune", 1, 7, "Rune" ];  //  (7)
item   [5] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item   [6] = [ "Mind-rune", 1, 12, "Rune" ];  //  (24)
item   [7] = [ "Nature-rune", 1, 3, "Rune" ];  //  (3)
item   [8] = [ "Coins", 1, 2, "" ];  //  (10)
item   [9] = [ "Fire-rune", 1, 12, "Rune" ];  //  (19)
item  [10] = [ "Body-rune", 1, 12, "Rune" ];  //  (12)
item  [11] = [ "Coins", 1, 2, "" ];  //  (12)
item  [12] = [ "Nothing", 1, 0, "" ];
item  [13] = [ "Coins", 1, 1, "" ];  //  (13)
item  [14] = [ "Nothing", 1, 0, "" ];
item  [15] = [ "Earth-rune", 1, 12, "Rune" ];  //  (12)
item  [16] = [ "Coins", 1, 1, "" ];  //  (14)
item  [17] = [ "Coins", 1, 2, "" ];  //  (16)
item  [18] = [ "Coins", 1, 29, "" ];  //  (45)
item  [19] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (3)
item  [20] = [ "Coins", 1, 29, "" ];  //  (74)
item  [21] = [ "Body-rune", 1, 7, "Rune" ];  //  (19)
item  [22] = [ "Coins", 1, 1, "" ];  //  (75)
item  [23] = [ "Coins", 1, 1, "" ];  //  (76)
item  [24] = [ "Fire-rune", 1, 7, "Rune" ];  //  (26)
item  [25] = [ "Coins", 1, 1, "" ];  //  (77)
item  [26] = [ "Law-rune", 1, 2, "Rune" ];  //  (2)
item  [27] = [ "Body-rune", 1, 7, "Rune" ];  //  (26)
item  [28] = [ "Coins", 1, 1, "" ];  //  (78)
item  [29] = [ "Mind-rune", 1, 12, "Rune" ];  //  (36)
item  [30] = [ "Coins", 1, 2, "" ];  //  (80)
item  [31] = [ "Coins", 1, 2, "" ];  //  (82)
item  [32] = [ "Coins", 1, 2, "" ];  //  (84)
item  [33] = [ "Coins", 1, 1, "" ];  //  (85)
item  [34] = [ "Nature-rune", 1, 3, "Rune" ];  //  (6)
item  [35] = [ "Coins", 1, 2, "" ];  //  (87)
item  [36] = [ "Nothing", 1, 0, "" ];
item  [37] = [ "Mind-rune", 1, 12, "Rune" ];  //  (48)
item  [38] = [ "Staff", 1, 1, "" ];
item  [39] = [ "Coins", 1, 1, "" ];  //  (88)
item  [40] = [ "Coins", 1, 1, "" ];  //  (89)
item  [41] = [ "Coins", 1, 1, "" ];  //  (90)
item  [42] = [ "Mind-rune", 1, 7, "Rune" ];  //  (55)
item  [43] = [ "Coins", 1, 30, "" ];  //  (120)
item  [44] = [ "Coins", 1, 4, "" ];  //  (124)
item  [45] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item  [46] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (6)
item  [47] = [ "Fire-rune", 1, 7, "Rune" ];  //  (33)
item  [48] = [ "Coins", 1, 1, "" ];  //  (125)
item  [49] = [ "Coins", 1, 2, "" ];  //  (127)
item  [50] = [ "Mind-rune", 1, 7, "Rune" ];  //  (62)
item  [51] = [ "Body-rune", 1, 12, "Rune" ];  //  (38)
item  [52] = [ "Coins", 1, 4, "" ];  //  (131)
item  [53] = [ "Coins", 1, 1, "" ];  //  (132)
item  [54] = [ "Coins", 1, 1, "" ];  //  (133)
item  [55] = [ "Coins", 1, 2, "" ];  //  (135)
item  [56] = [ "Nature-rune", 1, 3, "Rune" ];  //  (9)
item  [57] = [ "Coins", 1, 1, "" ];  //  (136)
item  [58] = [ "Coins", 1, 4, "" ];  //  (140)
item  [59] = [ "Coins", 1, 29, "" ];  //  (169)
item  [60] = [ "Staff", 1, 1, "" ];
item  [61] = [ "Nature-rune", 1, 3, "Rune" ];  //  (12)
item  [62] = [ "Nothing", 1, 0, "" ];
item  [63] = [ "Nothing", 1, 0, "" ];
item  [64] = [ "Water-rune", 1, 7, "Rune" ];  //  (7)
item  [65] = [ "Nature-rune", 1, 3, "Rune" ];  //  (15)
item  [66] = [ "Coins", 1, 1, "" ];  //  (170)
item  [67] = [ "Coins", 1, 30, "" ];  //  (200)
item  [68] = [ "Coins", 1, 1, "" ];  //  (201)
item  [69] = [ "Coins", 1, 4, "" ];  //  (205)
item  [70] = [ "Fire-rune", 1, 12, "Rune" ];  //  (45)
item  [71] = [ "wizardshat (Black)", 1, 1, "" ];
item  [72] = [ "Coins", 1, 1, "" ];  //  (206)
item  [73] = [ "Earth-rune", 1, 7, "Rune" ];  //  (19)
item  [74] = [ "Coins", 1, 2, "" ];  //  (208)
item  [75] = [ "Water-rune", 1, 7, "Rune" ];  //  (14)
item  [76] = [ "wizardshat (Black)", 1, 1, "" ];
item  [77] = [ "Coins", 1, 1, "" ];  //  (209)
item  [78] = [ "Nature-rune", 1, 3, "Rune" ];  //  (18)
item  [79] = [ "Nothing", 1, 0, "" ];
item  [80] = [ "Nothing", 1, 0, "" ];
item  [81] = [ "Coins", 1, 1, "" ];  //  (210)
item  [82] = [ "Fire-rune", 1, 7, "Rune" ];  //  (52)
item  [83] = [ "Coins", 1, 29, "" ];  //  (239)
item  [84] = [ "Staff", 1, 1, "" ];
item  [85] = [ "Nothing", 1, 0, "" ];
item  [86] = [ "Coins", 1, 2, "" ];  //  (241)
item  [87] = [ "Coins", 1, 1, "" ];  //  (242)
item  [88] = [ "Coins", 1, 1, "" ];  //  (243)
item  [89] = [ "Coins", 1, 1, "" ];  //  (244)
item  [90] = [ "Body-rune", 1, 12, "Rune" ];  //  (50)
item  [91] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (1)
item  [92] = [ "wizardshat (Black)", 1, 1, "" ];
item  [93] = [ "Mind-rune", 1, 12, "Rune" ];  //  (74)
item  [94] = [ "wizardshat (Black)", 1, 1, "" ];
item  [95] = [ "Fire-rune", 1, 12, "Rune" ];  //  (64)
item  [96] = [ "Coins", 1, 2, "" ];  //  (246)
item  [97] = [ "Staff", 1, 1, "" ];
item  [98] = [ "Mind-rune", 1, 7, "Rune" ];  //  (81)
item  [99] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [100] = [ "Coins", 1, 29, "" ];  //  (275)
item [101] = [ "Coins", 1, 29, "" ];  //  (304)
item [102] = [ "Nothing", 1, 0, "" ];
item [103] = [ "Staff", 1, 1, "" ];
item [104] = [ "Nature-rune", 1, 3, "Rune" ];  //  (21)
item [105] = [ "Coins", 1, 29, "" ];  //  (333)
item [106] = [ "Coins", 1, 4, "" ];  //  (337)
item [107] = [ "Coins", 1, 2, "" ];  //  (339)
item [108] = [ "Body-rune", 1, 7, "Rune" ];  //  (57)
item [109] = [ "Earth-rune", 1, 12, "Rune" ];  //  (31)
item [110] = [ "Staff", 1, 1, "" ];
item [111] = [ "Coins", 1, 29, "" ];  //  (368)
item [112] = [ "Nothing", 1, 0, "" ];
item [113] = [ "Water-rune", 1, 12, "Rune" ];  //  (26)
item [114] = [ "Staff", 1, 1, "" ];
item [115] = [ "Nothing", 1, 0, "" ];
item [116] = [ "Earth-rune", 1, 12, "Rune" ];  //  (43)
item [117] = [ "Coins", 1, 2, "" ];  //  (370)
item [118] = [ "Coins", 1, 4, "" ];  //  (374)
item [119] = [ "Staff", 1, 1, "" ];
item [120] = [ "Coins", 1, 1, "" ];  //  (375)
item [121] = [ "Coins", 1, 4, "" ];  //  (379)
item [122] = [ "Nothing", 1, 0, "" ];
item [123] = [ "Air-rune", 1, 7, "Rune" ];  //  (7)
item [124] = [ "Earth-rune", 1, 24, "Rune" ];  //  (67)
item [125] = [ "Coins", 1, 1, "" ];  //  (380)
item [126] = [ "Fire-rune", 1, 7, "Rune" ];  //  (71)
item [127] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [128] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [129] = [ "Nothing", 1, 0, "" ];
item [130] = [ "Coins", 1, 1, "" ];  //  (381)
item [131] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (9)
item [132] = [ "Coins", 1, 4, "" ];  //  (385)
item [133] = [ "Coins", 1, 29, "" ];  //  (414)
item [134] = [ "Nothing", 1, 0, "" ];
item [135] = [ "Law-rune", 1, 2, "Rune" ];  //  (4)
item [136] = [ "Staff", 1, 1, "" ];
item [137] = [ "Staff", 1, 1, "" ];
item [138] = [ "Coins", 1, 1, "" ];  //  (415)
item [139] = [ "Staff", 1, 1, "" ];
item [140] = [ "Earth-rune", 1, 7, "Rune" ];  //  (74)
item [141] = [ "Nothing", 1, 0, "" ];
item [142] = [ "Staff", 1, 1, "" ];
item [143] = [ "Coins", 1, 1, "" ];  //  (416)
item [144] = [ "Fire-rune", 1, 7, "Rune" ];  //  (78)
item [145] = [ "Nature-rune", 1, 3, "Rune" ];  //  (24)
item [146] = [ "Fire-rune", 1, 7, "Rune" ];  //  (85)
item [147] = [ "Nature-rune", 1, 3, "Rune" ];  //  (27)
item [148] = [ "Body-rune", 1, 7, "Rune" ];  //  (64)
item [149] = [ "Mind-rune", 1, 12, "Rune" ];  //  (93)
item [150] = [ "Body-rune", 1, 7, "Rune" ];  //  (71)
item [151] = [ "Nothing", 1, 0, "" ];
item [152] = [ "Water-rune", 1, 7, "Rune" ];  //  (33)
item [153] = [ "Coins", 1, 2, "" ];  //  (418)
item [154] = [ "Mind-rune", 1, 7, "Rune" ];  //  (100)
item [155] = [ "Earth-rune", 1, 24, "Rune" ];  //  (98)
item [156] = [ "Coins", 1, 1, "" ];  //  (419)
item [157] = [ "Earth-rune", 1, 24, "Rune" ];  //  (122)
item [158] = [ "Coins", 1, 1, "" ];  //  (420)
item [159] = [ "Coins", 1, 4, "" ];  //  (424)
item [160] = [ "Coins", 1, 1, "" ];  //  (425)
item [161] = [ "Earth-rune", 1, 7, "Rune" ];  //  (129)
item [162] = [ "Nothing", 1, 0, "" ];
item [163] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (12)
item [164] = [ "Coins", 1, 2, "" ];  //  (427)
item [165] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [166] = [ "Coins", 1, 2, "" ];  //  (429)
item [167] = [ "Coins", 1, 2, "" ];  //  (431)
item [168] = [ "Nothing", 1, 0, "" ];
item [169] = [ "Coins", 1, 1, "" ];  //  (432)
item [170] = [ "Coins", 1, 2, "" ];  //  (434)
item [171] = [ "Coins", 1, 1, "" ];  //  (435)
item [172] = [ "Earth-rune", 1, 12, "Rune" ];  //  (141)
item [173] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (15)
item [174] = [ "Nothing", 1, 0, "" ];
item [175] = [ "Coins", 1, 1, "" ];  //  (436)
item [176] = [ "Coins", 1, 2, "" ];  //  (438)
item [177] = [ "Nothing", 1, 0, "" ];
item [178] = [ "Coins", 1, 1, "" ];  //  (439)
item [179] = [ "Coins", 1, 2, "" ];  //  (441)
item [180] = [ "Fire-rune", 1, 12, "Rune" ];  //  (97)
item [181] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [182] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [183] = [ "Coins", 1, 29, "" ];  //  (470)
item [184] = [ "Nothing", 1, 0, "" ];
item [185] = [ "Nothing", 1, 0, "" ];
item [186] = [ "wizardshat (Black)", 1, 1, "" ];
item [187] = [ "Nothing", 1, 0, "" ];
item [188] = [ "Coins", 1, 4, "" ];  //  (474)
item [189] = [ "Nature-rune", 1, 3, "Rune" ];  //  (30)
item [190] = [ "Air-rune", 1, 12, "Rune" ];  //  (19)
item [191] = [ "Nothing", 1, 0, "" ];
item [192] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (18)
item [193] = [ "Air-rune", 1, 7, "Rune" ];  //  (26)
item [194] = [ "Staff", 1, 1, "" ];
item [195] = [ "Coins", 1, 2, "" ];  //  (476)
item [196] = [ "Air-rune", 1, 7, "Rune" ];  //  (33)
item [197] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (2)
item [198] = [ "Coins", 1, 29, "" ];  //  (505)
item [199] = [ "Nothing", 1, 0, "" ];
item [200] = [ "Coins", 1, 4, "" ];  //  (509)
item [201] = [ "Nature-rune", 1, 3, "Rune" ];  //  (33)
item [202] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (21)
item [203] = [ "Nothing", 1, 0, "" ];
item [204] = [ "Staff", 1, 1, "" ];
item [205] = [ "Blood-rune", 1, 1, "Rune" ];  //  (1)
item [206] = [ "Staff", 1, 1, "" ];
item [207] = [ "Coins", 1, 4, "" ];  //  (513)
item [208] = [ "Coins", 1, 2, "" ];  //  (515)
item [209] = [ "Nothing", 1, 0, "" ];
item [210] = [ "Coins", 1, 1, "" ];  //  (516)
item [211] = [ "Staff", 1, 1, "" ];
item [212] = [ "Coins", 1, 1, "" ];  //  (517)
item [213] = [ "Nothing", 1, 0, "" ];
item [214] = [ "Staff", 1, 1, "" ];
item [215] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (24)
item [216] = [ "Nothing", 1, 0, "" ];
item [217] = [ "Nature-rune", 1, 3, "Rune" ];  //  (36)
item [218] = [ "Air-rune", 1, 7, "Rune" ];  //  (40)
item [219] = [ "Coins", 1, 4, "" ];  //  (521)
item [220] = [ "Coins", 1, 2, "" ];  //  (523)
item [221] = [ "Nothing", 1, 0, "" ];
item [222] = [ "Earth-rune", 1, 12, "Rune" ];  //  (153)
item [223] = [ "Nature-rune", 1, 3, "Rune" ];  //  (39)
item [224] = [ "Coins", 1, 30, "" ];  //  (553)
item [225] = [ "Coins", 1, 2, "" ];  //  (555)
item [226] = [ "Coins", 1, 4, "" ];  //  (559)
item [227] = [ "Earth-rune", 1, 7, "Rune" ];  //  (160)
item [228] = [ "Nothing", 1, 0, "" ];
item [229] = [ "Nothing", 1, 0, "" ];
item [230] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (27)
item [231] = [ "Coins", 1, 1, "" ];  //  (560)
item [232] = [ "Coins", 1, 4, "" ];  //  (564)
item [233] = [ "Nothing", 1, 0, "" ];
item [234] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (3)
item [235] = [ "Coins", 1, 2, "" ];  //  (566)
item [236] = [ "Fire-rune", 1, 7, "Rune" ];  //  (104)
item [237] = [ "Nothing", 1, 0, "" ];
item [238] = [ "Coins", 1, 4, "" ];  //  (570)
item [239] = [ "Water-rune", 1, 12, "Rune" ];  //  (45)
item [240] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (30)
item [241] = [ "Coins", 1, 2, "" ];  //  (572)
item [242] = [ "Coins", 1, 1, "" ];  //  (573)
item [243] = [ "Air-rune", 1, 7, "Rune" ];  //  (47)
item [244] = [ "Nothing", 1, 0, "" ];
item [245] = [ "Nothing", 1, 0, "" ];
item [246] = [ "Nothing", 1, 0, "" ];
item [247] = [ "Coins", 1, 1, "" ];  //  (574)
item [248] = [ "Nothing", 1, 0, "" ];
item [249] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (33)
item [250] = [ "Nothing", 1, 0, "" ];
item [251] = [ "Blood-rune", 1, 1, "Rune" ];  //  (2)
item [252] = [ "Nothing", 1, 0, "" ];
item [253] = [ "Nature-rune", 1, 3, "Rune" ];  //  (42)
item [254] = [ "Coins", 1, 1, "" ];  //  (575)
item [255] = [ "Earth-rune", 1, 12, "Rune" ];  //  (172)
item [256] = [ "Fire-rune", 1, 12, "Rune" ];  //  (116)
item [257] = [ "Staff", 1, 1, "" ];
item [258] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (36)
item [259] = [ "Coins", 1, 4, "" ];  //  (579)
item [260] = [ "Nature-rune", 1, 3, "Rune" ];  //  (45)
item [261] = [ "Coins", 1, 1, "" ];  //  (580)
item [262] = [ "Nothing", 1, 0, "" ];
item [263] = [ "Coins", 1, 2, "" ];  //  (582)
item [264] = [ "Earth-rune", 1, 7, "Rune" ];  //  (179)
item [265] = [ "Earth-rune", 1, 24, "Rune" ];  //  (203)
item [266] = [ "Nothing", 1, 0, "" ];
item [267] = [ "Nothing", 1, 0, "" ];
item [268] = [ "Nothing", 1, 0, "" ];
item [269] = [ "Fire-rune", 1, 12, "Rune" ];  //  (128)
item [270] = [ "Staff", 1, 1, "" ];
item [271] = [ "Water-rune", 1, 7, "Rune" ];  //  (52)
item [272] = [ "Nothing", 1, 0, "" ];
item [273] = [ "Body-rune", 1, 7, "Rune" ];  //  (78)
item [274] = [ "Water-rune", 1, 12, "Rune" ];  //  (64)
item [275] = [ "Nature-rune", 1, 3, "Rune" ];  //  (48)
item [276] = [ "Nothing", 1, 0, "" ];
item [277] = [ "Law-rune", 1, 2, "Rune" ];  //  (6)
item [278] = [ "Coins", 1, 1, "" ];  //  (583)
item [279] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (39)
item [280] = [ "Coins", 1, 4, "" ];  //  (587)
item [281] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  (4)
item [282] = [ "Coins", 1, 1, "" ];  //  (588)
item [283] = [ "Earth-rune", 1, 24, "Rune" ];  //  (227)
item [284] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (42)
item [285] = [ "Coins", 1, 1, "" ];  //  (589)
item [286] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [287] = [ "Coins", 1, 29, "" ];  //  (618)
item [288] = [ "Earth-rune", 1, 24, "Rune" ];  //  (251)
item [289] = [ "Coins", 1, 2, "" ];  //  (620)
item [290] = [ "Coins", 1, 2, "" ];  //  (622)
item [291] = [ "Earth-rune", 1, 7, "Rune" ];  //  (258)
item [292] = [ "Coins", 1, 1, "" ];  //  (623)
item [293] = [ "Nothing", 1, 0, "" ];
item [294] = [ "Nothing", 1, 0, "" ];
item [295] = [ "Coins", 1, 4, "" ];  //  (627)
item [296] = [ "Mind-rune", 1, 7, "Rune" ];  //  (107)
item [297] = [ "Nature-rune", 1, 3, "Rune" ];  //  (51)
item [298] = [ "Nothing", 1, 0, "" ];
item [299] = [ "Fire-rune", 1, 7, "Rune" ];  //  (135)
item [300] = [ "Coins", 1, 1, "" ];  //  (628)
item [301] = [ "Body-rune", 1, 12, "Rune" ];  //  (90)
item [302] = [ "Coins", 1, 1, "" ];  //  (629)
item [303] = [ "Fire-rune", 1, 12, "Rune" ];  //  (147)
item [304] = [ "Coins", 1, 2, "" ];  //  (631)
item [305] = [ "Coins", 1, 2, "" ];  //  (633)
item [306] = [ "Air-rune", 1, 12, "Rune" ];  //  (59)
item [307] = [ "Air-rune", 1, 7, "Rune" ];  //  (66)
item [308] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (45)
item [309] = [ "Coins", 1, 1, "" ];  //  (634)
item [310] = [ "Fire-rune", 1, 12, "Rune" ];  //  (159)
item [311] = [ "Chaos-rune", 1, 3, "Rune" ];  //  (48)
item [312] = [ "Nothing", 1, 0, "" ];
item [313] = [ "Earth-rune", 1, 7, "Rune" ];  //  (265)
item [314] = [ "Nature-rune", 1, 3, "Rune" ];  //  (54)
item [315] = [ "Water-rune", 1, 7, "Rune" ];  //  (71)
item [316] = [ "Nature-rune", 1, 3, "Rune" ];  //  (57)
item [317] = [ "Nothing", 1, 0, "" ];
item [318] = [ "Coins", 1, 4, "" ];  //  (638)
item [319] = [ "Staff", 1, 1, "" ];

runs [0] = [ 319, 320 ];  // kills 320, drops 320

// runs [1] = [ x, y ];  // kills ? ( y - 320 ), drops ? ( x - 319 )

/*

item [000] = [ "Coins", 1, 1, "" ];  //  ()
item [000] = [ "Coins", 1, 2, "" ];  //  ()
item [000] = [ "Coins", 1, 4, "" ];  //  ()
item [000] = [ "Coins", 1, 29, "" ];  //  ()
item [000] = [ "Coins", 1, 30, "" ];  //  ()

item [000] = [ "Air-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Air-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Water-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Earth-rune", 1, 24, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Fire-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Body-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 7, "Rune" ];  //  ()
item [000] = [ "Mind-rune", 1, 12, "Rune" ];  //  ()
item [000] = [ "Chaos-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Cosmic-rune", 1, 1, "Rune" ];  //  ()
item [000] = [ "Nature-rune", 1, 3, "Rune" ];  //  ()
item [000] = [ "Law-rune", 1, 2, "Rune" ];  //  ()
item [000] = [ "Blood-rune", 1, 1, "Rune" ];  //  ()

item [000] = [ "Staff", 1, 1, "" ];
item [000] = [ "Black Robe (Wizard's Top)", 1, 1, "" ];
item [000] = [ "wizardshat (Black)", 1, 1, "" ];

item [000] = [ "Nothing", 1, 0, "" ];

*/

var idbl = item.length;   // total drops
var truns = runs.length;  // total runs

//variables used by the analysis pages

var mname = "Melzar the mad";        // monster's name
var mcbl = 45;                       // monster's combat level
var mindex = 109;                    // index into monster data base
var mrpt = 1;                        // number of non-breaking space to add after index name