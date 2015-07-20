#  ZIKODU (FIZENG STANDARD ENCODING)  #

##  table of contents  ##

- [notice](#notice)
- [rationale](#rationale)
- [basic explanation](#basic-explanation)
- [compact code tables](#compact-code-tables)
- [expanded code tables](#expanded-code-tables)

##  notice  ##

__ZIKODU is presently still a work in progress.
As FIZENG develops and more characters are added to its syllabary, the code tables below may change or expand.
The following information is provided for reference purposes only.__

##  rationale  ##

ZIKODU exists to provide an encoding scheme such that every character in FIZENG can be encoded in only two bytes.
Furthermore, ZIKODU provides an organizational system for FIZENG characters which makes more sense with the language than the traditional ordering through UNICODE.
ZIKODU is an 8-bit extension to US-ASCII; pure ASCII text will be encoded unmodified.

##  basic explanation  ##

Characters in ZIKODU are signified by *code points*, unique numbers assigned to each grapheme.
There are 256 *base characters* in ZIKODU, including 16 *variation selectors* which are used to select alternate glyphs.
Code points are rendered in hexadecimal, preceeded by the string `Z-`; equivalent UNICODE code points are provided.

The base characters represented by code points `Z-00` through `Z-9F` are equivalent to their Unicode/Latin-1 counterparts.
Those represented by code points `Z-00` through `Z-1F` and `Z-7F` through `Z-9F`, are referred to as *control characters*, and should not be visually rendered.

Other base characters are considered *combined* with variation selectors if all of the following are true:

- The base character is not a control character or a variation selector
- The variation selector directly follows the base character

Base-and-variation-character combinations are considered *variant characters*.
Variant characters which are not defined in this specification should be rendered as either their corresponding base character or Z+DD 〓 GETA MARK.

Variation selectors which are not combined with base characters __should not__ be rendered.
Note that base characters __cannot__ be combined with more than one variation selector.

##  compact code tables  ##

###  base character set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |      |  !   |  "   |  #   |  $   |  %   |  &   |  '   |  (   |  )   |  *   |  +   |  ,   |  -   |  .   |  /   |
| Z-30 |  0   |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |  9   |  :   |  ;   |  <   |  =   |  >   |  ?   |
| Z-40 |  @   |  A   |  B   |  C   |  D   |  E   |  F   |  G   |  H   |  I   |  J   |  K   |  L   |  M   |  N   |  O   |
| Z-50 |  P   |  Q   |  R   |  S   |  T   |  U   |  V   |  W   |  X   |  Y   |  Z   |  [   |  \\  |  ]   |  ^   |  _   |
| Z-60 |  \`  |  a   |  b   |  c   |  d   |  e   |  f   |  g   |  h   |  i   |  j   |  k   |  l   |  m   |  n   |  o   |
| Z-70 |  p   |  q   |  r   |  s   |  t   |  u   |  v   |  w   |  x   |  y   |  z   |  {   |&#x7C;|  }   |  ~   |      |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  　  |  、  |  。  |  与  |  丨  |  々  |  舌  |  羊  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〃  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  日  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〜  |      |      |
| Z-D0 |  月  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〰  |      |      |
| Z-F0 |  卜  |  〓  |  〓  |  〓  |  〓  |  〓  |  戸  |  手  |  〓  |  〓  |  〓  |  〓  |  〓  |  〽  |  「  |  」  |

###  first variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  second variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  third variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  fourth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  fifth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  sixth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  seventh variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  eighth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  ninth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  tenth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  eleventh variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  twelfth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  thirteenth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  fourteenth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  fifteenth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

###  sixteenth variant set  ###

|      |  +0  |  +1  |  +2  |  +3  |  +4  |  +5  |  +6  |  +7  |  +8  |  +9  |  +A  |  +B  |  +C  |  +D  |  +E  |  +F  |
| ---: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| Z-00 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-10 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-20 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-30 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-40 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-50 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-60 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-70 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |
| Z-80 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-90 |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |      |
| Z-A0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |      |      |      |      |      |      |
| Z-B0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-C0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-D0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-E0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |      |      |
| Z-F0 |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |  〓  |

##  expanded code tables  ##

- [ base character set     ](tables/00.md)
- [ first variant set      ](tables/01.md)
- [ second variant set     ](tables/02.md)
- [ third variant set      ](tables/03.md)
- [ fourth variant set     ](tables/04.md)
- [ fifth variant set      ](tables/05.md)
- [ sixth variant set      ](tables/06.md)
- [ seventh variant set    ](tables/07.md)
- [ eighth variant set     ](tables/08.md)
- [ ninth variant set      ](tables/09.md)
- [ tenth variant set      ](tables/10.md)
- [ eleventh variant set   ](tables/11.md)
- [ twelfth variant set    ](tables/12.md)
- [ thirteenth variant set ](tables/13.md)
- [ fourteenth variant set ](tables/14.md)
- [ fifteenth variant set  ](tables/15.md)
- [ sixteenth variant set  ](tables/16.md)