export type SolmashWhitelist = {
  "version": "0.1.0",
  "name": "solmash_whitelist",
  "instructions": [
    {
      "name": "initAuction",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitAuctionParams"
          }
        }
      ]
    },
    {
      "name": "addToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ownerAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "whitelist",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelistUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "preSaleBuyUsingSpl",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "preSaleBuyUsingSol",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimTokens",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "changeTime",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newStartTime",
          "type": "i64"
        },
        {
          "name": "newEndTime",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "auction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          },
          {
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "preSaleStartTime",
            "type": "i64"
          },
          {
            "name": "preSaleEndTime",
            "type": "i64"
          },
          {
            "name": "ticketsInPool",
            "type": "u64"
          },
          {
            "name": "tokenQuantityPerTicket",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSol",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSobb",
            "type": "u64"
          },
          {
            "name": "accumulatedSol",
            "type": "u64"
          },
          {
            "name": "accumulatedSobb",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "participated",
            "type": "bool"
          },
          {
            "name": "claimed",
            "type": "bool"
          },
          {
            "name": "whitelisted",
            "type": "bool"
          },
          {
            "name": "blacklisted",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitAuctionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          },
          {
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "preSaleStartTime",
            "type": "i64"
          },
          {
            "name": "preSaleEndTime",
            "type": "i64"
          },
          {
            "name": "ticketsInPool",
            "type": "u64"
          },
          {
            "name": "tokenQuantityPerTicket",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSol",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSobb",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAuction",
      "msg": "Invalid Auction"
    },
    {
      "code": 6001,
      "name": "InvalidToken",
      "msg": "Invalid Token"
    },
    {
      "code": 6002,
      "name": "InsufficientTokens",
      "msg": "Insufficient Token"
    },
    {
      "code": 6003,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6004,
      "name": "AuctionNotEnded",
      "msg": "Auction Not Ended"
    },
    {
      "code": 6005,
      "name": "AuctionDisabled",
      "msg": "Auction Disabled"
    },
    {
      "code": 6006,
      "name": "NonNativeAuction",
      "msg": "Non Native Auction"
    },
    {
      "code": 6007,
      "name": "NonSplAuction",
      "msg": "Non SPL Auction"
    },
    {
      "code": 6008,
      "name": "NotWhitelisted",
      "msg": "Not Whitelisted"
    },
    {
      "code": 6009,
      "name": "ExceedsLimit",
      "msg": "Exceeds Buying Limit"
    },
    {
      "code": 6010,
      "name": "PreSaleNotEnabled",
      "msg": "Pre Sale Not Enabled"
    },
    {
      "code": 6011,
      "name": "InvalidPresaleTime",
      "msg": "Invalid Pre Sale Time "
    },
    {
      "code": 6012,
      "name": "PreSaleAlreadyStarted",
      "msg": "Pre Sale Already Started"
    },
    {
      "code": 6013,
      "name": "PreSaleNotEnded",
      "msg": "Pre Sale Not Ended"
    },
    {
      "code": 6014,
      "name": "InvalidTokenAmount",
      "msg": "Invalid Token Amount"
    },
    {
      "code": 6015,
      "name": "InvalidSolAmount",
      "msg": "Invalid Sol Amount"
    },
    {
      "code": 6016,
      "name": "InvalidAuctionTimes",
      "msg": "Invalid Auction Times"
    },
    {
      "code": 6017,
      "name": "AlreadyParticipated",
      "msg": "User Already Participated"
    },
    {
      "code": 6018,
      "name": "InvalidSolFor1ticket",
      "msg": "Invalid Sol for 1 ticket"
    },
    {
      "code": 6019,
      "name": "AlreadyClaimed",
      "msg": "Already Claimed"
    },
    {
      "code": 6020,
      "name": "NotParticipated",
      "msg": "Not Participated"
    },
    {
      "code": 6021,
      "name": "InvalidBidToken",
      "msg": "Invalid Bid Token"
    },
    {
      "code": 6022,
      "name": "InvalidClaimTime",
      "msg": "Invalid Claim Time"
    }
  ]
};

export const IDL: SolmashWhitelist = {
  "version": "0.1.0",
  "name": "solmash_whitelist",
  "instructions": [
    {
      "name": "initAuction",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitAuctionParams"
          }
        }
      ]
    },
    {
      "name": "addToken",
      "accounts": [
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ownerAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawFunds",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "whitelist",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelistUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "preSaleBuyUsingSpl",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "preSaleBuyUsingSol",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimTokens",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "changeTime",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newStartTime",
          "type": "i64"
        },
        {
          "name": "newEndTime",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "auction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          },
          {
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "preSaleStartTime",
            "type": "i64"
          },
          {
            "name": "preSaleEndTime",
            "type": "i64"
          },
          {
            "name": "ticketsInPool",
            "type": "u64"
          },
          {
            "name": "tokenQuantityPerTicket",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSol",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSobb",
            "type": "u64"
          },
          {
            "name": "accumulatedSol",
            "type": "u64"
          },
          {
            "name": "accumulatedSobb",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "participated",
            "type": "bool"
          },
          {
            "name": "claimed",
            "type": "bool"
          },
          {
            "name": "whitelisted",
            "type": "bool"
          },
          {
            "name": "blacklisted",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitAuctionParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          },
          {
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "preSaleStartTime",
            "type": "i64"
          },
          {
            "name": "preSaleEndTime",
            "type": "i64"
          },
          {
            "name": "ticketsInPool",
            "type": "u64"
          },
          {
            "name": "tokenQuantityPerTicket",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSol",
            "type": "u64"
          },
          {
            "name": "ticketPriceInSobb",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAuction",
      "msg": "Invalid Auction"
    },
    {
      "code": 6001,
      "name": "InvalidToken",
      "msg": "Invalid Token"
    },
    {
      "code": 6002,
      "name": "InsufficientTokens",
      "msg": "Insufficient Token"
    },
    {
      "code": 6003,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6004,
      "name": "AuctionNotEnded",
      "msg": "Auction Not Ended"
    },
    {
      "code": 6005,
      "name": "AuctionDisabled",
      "msg": "Auction Disabled"
    },
    {
      "code": 6006,
      "name": "NonNativeAuction",
      "msg": "Non Native Auction"
    },
    {
      "code": 6007,
      "name": "NonSplAuction",
      "msg": "Non SPL Auction"
    },
    {
      "code": 6008,
      "name": "NotWhitelisted",
      "msg": "Not Whitelisted"
    },
    {
      "code": 6009,
      "name": "ExceedsLimit",
      "msg": "Exceeds Buying Limit"
    },
    {
      "code": 6010,
      "name": "PreSaleNotEnabled",
      "msg": "Pre Sale Not Enabled"
    },
    {
      "code": 6011,
      "name": "InvalidPresaleTime",
      "msg": "Invalid Pre Sale Time "
    },
    {
      "code": 6012,
      "name": "PreSaleAlreadyStarted",
      "msg": "Pre Sale Already Started"
    },
    {
      "code": 6013,
      "name": "PreSaleNotEnded",
      "msg": "Pre Sale Not Ended"
    },
    {
      "code": 6014,
      "name": "InvalidTokenAmount",
      "msg": "Invalid Token Amount"
    },
    {
      "code": 6015,
      "name": "InvalidSolAmount",
      "msg": "Invalid Sol Amount"
    },
    {
      "code": 6016,
      "name": "InvalidAuctionTimes",
      "msg": "Invalid Auction Times"
    },
    {
      "code": 6017,
      "name": "AlreadyParticipated",
      "msg": "User Already Participated"
    },
    {
      "code": 6018,
      "name": "InvalidSolFor1ticket",
      "msg": "Invalid Sol for 1 ticket"
    },
    {
      "code": 6019,
      "name": "AlreadyClaimed",
      "msg": "Already Claimed"
    },
    {
      "code": 6020,
      "name": "NotParticipated",
      "msg": "Not Participated"
    },
    {
      "code": 6021,
      "name": "InvalidBidToken",
      "msg": "Invalid Bid Token"
    },
    {
      "code": 6022,
      "name": "InvalidClaimTime",
      "msg": "Invalid Claim Time"
    }
  ]
};
