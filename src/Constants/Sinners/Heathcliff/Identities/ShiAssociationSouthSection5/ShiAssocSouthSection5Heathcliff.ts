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
import { ShiAssocSouthSection5HeathcliffDefense } from "./ShiAssocSouthSection5HeathcliffDefense";
import { ShiAssocSouthSection5HeathcliffSkill1 } from "./ShiAssocSouthSection5HeathcliffSkill1";
import { ShiAssocSouthSection5HeathcliffSkill2 } from "./ShiAssocSouthSection5HeathcliffSkill2";
import { ShiAssocSouthSection5HeathcliffSkill3 } from "./ShiAssocSouthSection5HeathcliffSkill3";

export const ShiAssocSouthSection5Heathcliff: Identity = {
    Id: 10702,
    Name: "Shi Assoc. South Section 5",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [80, 60],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ShiAssocSouthSection5HeathcliffSkill1, 
            ShiAssocSouthSection5HeathcliffSkill2, 
            ShiAssocSouthSection5HeathcliffSkill3, 
            ShiAssocSouthSection5HeathcliffDefense],
    Passives: [
        new Passive("Repspiration",
            PassiveTypeEnum.Combat,
            "After taking damage from attacks this turn, deal +10% damage.",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Self-neglect",
            PassiveTypeEnum.Support,
            "1 ally with the least HP deals and takes +20% damage.",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/ShiAssociationSouthSection5/10702gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/ShiAssociationSouthSection5/10702gacksunginfo.png"
}