export type LaunchpadLottery = {
  "version": "0.1.0",
  "name": "launchpad_lottery",
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
        }
      ],
      "args": []
    },
    {
      "name": "participate",
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
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
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
      "name": "participateUsingSpl",
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
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerBidTokenAccount",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "selectWinnersViaLottery",
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
          "name": "winnersList",
          "type": {
            "vec": "u64"
          }
        }
      ]
    },
    {
      "name": "claimTokensByWinners",
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
          "name": "auctionToken",
          "isMut": false,
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
          "name": "auction",
          "isMut": true,
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
        }
      ],
      "args": []
    },
    {
      "name": "claimByLosers",
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
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerBidTokenAccount",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawAuctionFunds",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "blacklistUser",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": false
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "blacklist",
          "type": "bool"
        }
      ]
    },
    {
      "name": "winnerToggle",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": false
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
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "participationStartTime",
            "type": "i64"
          },
          {
            "name": "participationEndTime",
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
            "name": "winningSeats",
            "type": "u64"
          },
          {
            "name": "winnersList",
            "type": {
              "vec": "u64"
            }
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
            "name": "participation",
            "type": "bool"
          },
          {
            "name": "buyerAddress",
            "type": "publicKey"
          },
          {
            "name": "buyerUniqueId",
            "type": "u64"
          },
          {
            "name": "claimToken",
            "type": "bool"
          },
          {
            "name": "claimSol",
            "type": "bool"
          },
          {
            "name": "claimed",
            "type": "bool"
          },
          {
            "name": "winner",
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
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "participationStartTime",
            "type": "i64"
          },
          {
            "name": "participationEndTime",
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
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6001,
      "name": "AuctionDisabled",
      "msg": "Auction Disabled"
    },
    {
      "code": 6002,
      "name": "AlreadyParticipated",
      "msg": "User Already Participated"
    },
    {
      "code": 6003,
      "name": "SeatFulfilled",
      "msg": "Seats Fulfilled"
    },
    {
      "code": 6004,
      "name": "InvalidSeatQuantity",
      "msg": "Invalid Seat Quantity"
    },
    {
      "code": 6005,
      "name": "InvalidParticipationPeriod",
      "msg": "Invalid Participation Period"
    },
    {
      "code": 6006,
      "name": "ParticipationPeriodStarted",
      "msg": "Participation Period Started"
    },
    {
      "code": 6007,
      "name": "ParticipationPeriodNotEnded",
      "msg": "Participation Period Not Ended"
    },
    {
      "code": 6008,
      "name": "NotALotteryWinner",
      "msg": "Not A Lottery Winner"
    },
    {
      "code": 6009,
      "name": "TokenAlreadyClaimed",
      "msg": "Token Already Claimed"
    },
    {
      "code": 6010,
      "name": "SOLAlreadyClaimed",
      "msg": "SOL Already Claimed"
    },
    {
      "code": 6011,
      "name": "WinnersCantClaimAsset",
      "msg": "Winners Can't Claim Participation Asset"
    },
    {
      "code": 6012,
      "name": "AuctionNotEnded",
      "msg": "Auction Not Ended"
    },
    {
      "code": 6013,
      "name": "InvalidToken",
      "msg": "Invalid Token"
    },
    {
      "code": 6014,
      "name": "InvalidWinnersList",
      "msg": "Invalid Winners List"
    },
    {
      "code": 6015,
      "name": "InvalidCounter",
      "msg": "Invalid Counter"
    },
    {
      "code": 6016,
      "name": "InvalidClaimTime",
      "msg": "Invalid Claim Time"
    },
    {
      "code": 6017,
      "name": "UserBlacklisted",
      "msg": "User BlackListed"
    }
  ]
};

export const IDL: LaunchpadLottery = {
  "version": "0.1.0",
  "name": "launchpad_lottery",
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
        }
      ],
      "args": []
    },
    {
      "name": "participate",
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
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
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
      "name": "participateUsingSpl",
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
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerBidTokenAccount",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "selectWinnersViaLottery",
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
          "name": "winnersList",
          "type": {
            "vec": "u64"
          }
        }
      ]
    },
    {
      "name": "claimTokensByWinners",
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
          "name": "auctionToken",
          "isMut": false,
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
          "name": "auction",
          "isMut": true,
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
        }
      ],
      "args": []
    },
    {
      "name": "claimByLosers",
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
          "name": "auctionVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionVaultBidTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerBidTokenAccount",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawAuctionFunds",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "blacklistUser",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": false
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "blacklist",
          "type": "bool"
        }
      ]
    },
    {
      "name": "winnerToggle",
      "accounts": [
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": false,
          "isSigner": false
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
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "participationStartTime",
            "type": "i64"
          },
          {
            "name": "participationEndTime",
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
            "name": "winningSeats",
            "type": "u64"
          },
          {
            "name": "winnersList",
            "type": {
              "vec": "u64"
            }
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
            "name": "participation",
            "type": "bool"
          },
          {
            "name": "buyerAddress",
            "type": "publicKey"
          },
          {
            "name": "buyerUniqueId",
            "type": "u64"
          },
          {
            "name": "claimToken",
            "type": "bool"
          },
          {
            "name": "claimSol",
            "type": "bool"
          },
          {
            "name": "claimed",
            "type": "bool"
          },
          {
            "name": "winner",
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
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "participationStartTime",
            "type": "i64"
          },
          {
            "name": "participationEndTime",
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
            "name": "auctionToken",
            "type": "publicKey"
          },
          {
            "name": "bidToken",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6001,
      "name": "AuctionDisabled",
      "msg": "Auction Disabled"
    },
    {
      "code": 6002,
      "name": "AlreadyParticipated",
      "msg": "User Already Participated"
    },
    {
      "code": 6003,
      "name": "SeatFulfilled",
      "msg": "Seats Fulfilled"
    },
    {
      "code": 6004,
      "name": "InvalidSeatQuantity",
      "msg": "Invalid Seat Quantity"
    },
    {
      "code": 6005,
      "name": "InvalidParticipationPeriod",
      "msg": "Invalid Participation Period"
    },
    {
      "code": 6006,
      "name": "ParticipationPeriodStarted",
      "msg": "Participation Period Started"
    },
    {
      "code": 6007,
      "name": "ParticipationPeriodNotEnded",
      "msg": "Participation Period Not Ended"
    },
    {
      "code": 6008,
      "name": "NotALotteryWinner",
      "msg": "Not A Lottery Winner"
    },
    {
      "code": 6009,
      "name": "TokenAlreadyClaimed",
      "msg": "Token Already Claimed"
    },
    {
      "code": 6010,
      "name": "SOLAlreadyClaimed",
      "msg": "SOL Already Claimed"
    },
    {
      "code": 6011,
      "name": "WinnersCantClaimAsset",
      "msg": "Winners Can't Claim Participation Asset"
    },
    {
      "code": 6012,
      "name": "AuctionNotEnded",
      "msg": "Auction Not Ended"
    },
    {
      "code": 6013,
      "name": "InvalidToken",
      "msg": "Invalid Token"
    },
    {
      "code": 6014,
      "name": "InvalidWinnersList",
      "msg": "Invalid Winners List"
    },
    {
      "code": 6015,
      "name": "InvalidCounter",
      "msg": "Invalid Counter"
    },
    {
      "code": 6016,
      "name": "InvalidClaimTime",
      "msg": "Invalid Claim Time"
    },
    {
      "code": 6017,
      "name": "UserBlacklisted",
      "msg": "User BlackListed"
    }
  ]
};
