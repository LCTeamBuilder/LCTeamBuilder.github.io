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
import { ZweiAssocWestSection3SinclairDefense } from "./ZweiAssocWestSection3SinclairDefense";
import { ZweiAssocWestSection3SinclairSkill1 } from "./ZweiAssocWestSection3SinclairSkill1";
import { ZweiAssocWestSection3SinclairSkill2 } from "./ZweiAssocWestSection3SinclairSkill2";
import { ZweiAssocWestSection3SinclairSkill3 } from "./ZweiAssocWestSection3SinclairSkill3";

export const ZweiAssocWestSection3Sinclair: Identity = {
    Id: 11010,
    Name: "Zwei Assoc. West Section 3",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [60],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [ZweiAssocWestSection3SinclairSkill1, 
            ZweiAssocWestSection3SinclairSkill2, 
            ZweiAssocWestSection3SinclairSkill3, 
            ZweiAssocWestSection3SinclairDefense],
    Passives: [
        new Passive("Begin Protection Mission",
            PassiveTypeEnum.Combat,
            "At Combat Start, gain [Defense Level Up] equal to [Tremor] Count on self (max 5)",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Contract Target Protection",
            PassiveTypeEnum.Support,
            "Turn End: apply 1 [Haste] and 3 [Defense Level Up] to 1 ally with the lowest HP percentage next turn",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Sinclair/Identities/ZweiAssocWestSection3/11010gacksung.png",
    PortraitImageDir: "./assets/Sinners/Sinclair/Identities/ZweiAssocWestSection3/11010gacksunginfo.png"
}