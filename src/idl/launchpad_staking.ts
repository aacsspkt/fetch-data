export type LaunchpadStaking = {
  "version": "0.1.0",
  "name": "launchpad_staking",
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
      "name": "addAuctionToken",
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
      "args": [
        {
          "name": "amountToAdd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "stakeToken",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeToken",
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
        }
      ],
      "args": [
        {
          "name": "stakeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimAuctionToken",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerClaimPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerAuctionTokenAccount",
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
          "name": "auctionVaultStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "blacklistPda",
          "isMut": true,
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
      "args": [
        {
          "name": "payWithSol",
          "type": "bool"
        }
      ]
    },
    {
      "name": "claimStakedToken",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerClaimPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "blacklistPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeToken",
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
          "name": "auctionVaultStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorStakeTokenAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeToken",
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
      "name": "changeEndTime",
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
          "name": "newEndTime",
          "type": "i64"
        }
      ]
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
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "blacklistPda",
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
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "fixedAmount",
            "type": "bool"
          },
          {
            "name": "stakingStartTime",
            "type": "i64"
          },
          {
            "name": "stakingEndTime",
            "type": "i64"
          },
          {
            "name": "tokensInPool",
            "type": "u64"
          },
          {
            "name": "remainingTokens",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSol",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSobb",
            "type": "u64"
          },
          {
            "name": "accumulatedStakingAmount",
            "type": "u64"
          },
          {
            "name": "solAccumulated",
            "type": "u64"
          },
          {
            "name": "sobbAccumulated",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakerBlacklist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "blacklisted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "stakerClaim",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimedStakeToken",
            "type": "bool"
          },
          {
            "name": "claimedAuctionToken",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "staker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeAmount",
            "type": "u64"
          },
          {
            "name": "allocatedMashAmount",
            "type": "u64"
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
            "name": "fixedAmount",
            "type": "bool"
          },
          {
            "name": "stakingStartTime",
            "type": "i64"
          },
          {
            "name": "stakingEndTime",
            "type": "i64"
          },
          {
            "name": "tokensInPool",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSol",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSobb",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientTokens",
      "msg": "Insufficient Token"
    },
    {
      "code": 6001,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6002,
      "name": "AuctionDisabled",
      "msg": "Auction Disabled"
    },
    {
      "code": 6003,
      "name": "InvalidStakingPeriod",
      "msg": "Invalid Staking Period"
    },
    {
      "code": 6004,
      "name": "StakingPeriodStarted",
      "msg": "Staking Period Started"
    },
    {
      "code": 6005,
      "name": "StakingPeriodNotEnded",
      "msg": "Staking Period Not Ended"
    },
    {
      "code": 6006,
      "name": "InvalidClaimTime",
      "msg": "Invalid Claim Time"
    },
    {
      "code": 6007,
      "name": "StakeAlreadyClaimed",
      "msg": "Stake Already Claimed"
    },
    {
      "code": 6008,
      "name": "AuctionTokenAlreadyClaimed",
      "msg": "Auction Token Already Claimed"
    },
    {
      "code": 6009,
      "name": "UserBlacklisted",
      "msg": "User BlackListed"
    }
  ]
};

export const IDL: LaunchpadStaking = {
  "version": "0.1.0",
  "name": "launchpad_staking",
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
      "name": "addAuctionToken",
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
      "args": [
        {
          "name": "amountToAdd",
          "type": "u64"
        }
      ]
    },
    {
      "name": "stakeToken",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeToken",
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
        }
      ],
      "args": [
        {
          "name": "stakeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimAuctionToken",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerClaimPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerAuctionTokenAccount",
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
          "name": "auctionVaultStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "blacklistPda",
          "isMut": true,
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
      "args": [
        {
          "name": "payWithSol",
          "type": "bool"
        }
      ]
    },
    {
      "name": "claimStakedToken",
      "accounts": [
        {
          "name": "staker",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakerPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerClaimPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "blacklistPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeVaultTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakerStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakeToken",
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
          "name": "auctionVaultStakeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorAuctionTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creatorStakeTokenAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auctionToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakeToken",
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
      "name": "changeEndTime",
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
          "name": "newEndTime",
          "type": "i64"
        }
      ]
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
          "name": "staker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "blacklistPda",
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
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "fixedAmount",
            "type": "bool"
          },
          {
            "name": "stakingStartTime",
            "type": "i64"
          },
          {
            "name": "stakingEndTime",
            "type": "i64"
          },
          {
            "name": "tokensInPool",
            "type": "u64"
          },
          {
            "name": "remainingTokens",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSol",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSobb",
            "type": "u64"
          },
          {
            "name": "accumulatedStakingAmount",
            "type": "u64"
          },
          {
            "name": "solAccumulated",
            "type": "u64"
          },
          {
            "name": "sobbAccumulated",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakerBlacklist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "blacklisted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "stakerClaim",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimedStakeToken",
            "type": "bool"
          },
          {
            "name": "claimedAuctionToken",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "staker",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeAmount",
            "type": "u64"
          },
          {
            "name": "allocatedMashAmount",
            "type": "u64"
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
            "name": "fixedAmount",
            "type": "bool"
          },
          {
            "name": "stakingStartTime",
            "type": "i64"
          },
          {
            "name": "stakingEndTime",
            "type": "i64"
          },
          {
            "name": "tokensInPool",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSol",
            "type": "u64"
          },
          {
            "name": "unitTokenPriceInLpPerSobb",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientTokens",
      "msg": "Insufficient Token"
    },
    {
      "code": 6001,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6002,
      "name": "AuctionDisabled",
      "msg": "Auction Disabled"
    },
    {
      "code": 6003,
      "name": "InvalidStakingPeriod",
      "msg": "Invalid Staking Period"
    },
    {
      "code": 6004,
      "name": "StakingPeriodStarted",
      "msg": "Staking Period Started"
    },
    {
      "code": 6005,
      "name": "StakingPeriodNotEnded",
      "msg": "Staking Period Not Ended"
    },
    {
      "code": 6006,
      "name": "InvalidClaimTime",
      "msg": "Invalid Claim Time"
    },
    {
      "code": 6007,
      "name": "StakeAlreadyClaimed",
      "msg": "Stake Already Claimed"
    },
    {
      "code": 6008,
      "name": "AuctionTokenAlreadyClaimed",
      "msg": "Auction Token Already Claimed"
    },
    {
      "code": 6009,
      "name": "UserBlacklisted",
      "msg": "User BlackListed"
    }
  ]
};
