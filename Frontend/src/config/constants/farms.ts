import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SPC',
    lpAddresses: {
      97: '',
      56: '0x9005601469de9cfc10CDB68ce0f07B80D5682204',
    },
    token: tokens.cake,
    quoteToken: tokens.cake,
  },
  {
    pid: 1,
    lpSymbol: 'SPC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfd8155D7004713893556994E73EC172260073EA1',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'SPC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x177366B6C35E85B52A4F64d4fE4416158b037FC9',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BABYBITC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9237Ae5ee1Be642bc70270305A432b770eDB2fF7',
    },
    token: tokens.babybitc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'HAPPY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x82AB370d2055e083747876885E3Ad0B829CFb524',
    },
    token: tokens.happy,
    quoteToken: tokens.wbnb,
  }
]

export default farms
