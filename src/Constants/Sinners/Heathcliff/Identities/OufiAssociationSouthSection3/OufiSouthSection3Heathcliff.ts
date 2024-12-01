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
import { OufiSouthSection3HeathcliffDefense } from "./OufiSouthSection3HeathcliffDefense";
import { OufiSouthSection3HeathcliffSkill1 } from "./OufiSouthSection3HeathcliffSkill1";
import { OufiSouthSection3HeathcliffSkill2 } from "./OufiSouthSection3HeathcliffSkill2";
import { OufiSouthSection3HeathcliffSkill3 } from "./OufiSouthSection3HeathcliffSkill3";

export const OufiSouthSection3Heathcliff: Identity = {
    Id: 10708,
    Name: "Öufi South Section 3",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [OufiSouthSection3HeathcliffSkill1, 
            OufiSouthSection3HeathcliffSkill2, 
            OufiSouthSection3HeathcliffSkill3, 
            OufiSouthSection3HeathcliffDefense],
    Passives: [
        new Passive("Grave Attendance",
            PassiveTypeEnum.Combat,
            "Deal +10% more damage for every 6 [Tremor] Potency on target (Max 30%)<br>"+
            "When converting [Tremor] into [Tremor - Decay] with this unit's Skill effects, trigger [Tremor Burst] on target",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Verify Obligation Fulfillment",
            PassiveTypeEnum.Support,
            "To 1 ally with the fastest Speed: +1 Clash Power to Skills that apply [Tremor] Potency or Count",
            [{ sin: SinEnum.Pride, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/OufiAssociationSouthSection3/10708gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/OufiAssociationSouthSection3/10708gacksunginfo.png"
}