import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { ZweiAssocWestSection3IshmaelDefense } from "./ZweiAssocWestSection3IshmaelDefense";
import { ZweiAssocWestSection3IshmaelSkill1 } from "./ZweiAssocWestSection3IshmaelSkill1";
import { ZweiAssocWestSection3IshmaelSkill2 } from "./ZweiAssocWestSection3IshmaelSkill2";
import { ZweiAssocWestSection3IshmaelSkill3 } from "./ZweiAssocWestSection3IshmaelSkill3";

export const ZweiAssocWestSection3Ishmael: Identity = {
    Id: 10810,
    Name: "Zwei Assoc. West Section 3",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 93,
    HealthPerLevel: 3.21,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [ZweiAssocWestSection3IshmaelSkill1, 
            ZweiAssocWestSection3IshmaelSkill2, 
            ZweiAssocWestSection3IshmaelSkill3, 
            ZweiAssocWestSection3IshmaelDefense],
    Passives: [
        new Passive("Shock-nullifying Greatsword",
            PassiveTypeEnum.Combat,
            "At Combat Start, gain [Defense Level Up] equal to [Tremor] Count on self (max 5)<br>"+
            "- If this unit is in [Defensive Stance], double the amount of [Defense Level Up] gained from the above effect.",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("mergency Protection",
            PassiveTypeEnum.Support,
            "At Combat Start, compare each Identity's current HP to their HP at the start of the previous turn. Then, apply 2 Defense Level Up to the Identity with the greatest disparity of HP values between turns.",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/ZweiAssocWestSection3/10810gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/ZweiAssocWestSection3/10810gacksunginfo.png"
}