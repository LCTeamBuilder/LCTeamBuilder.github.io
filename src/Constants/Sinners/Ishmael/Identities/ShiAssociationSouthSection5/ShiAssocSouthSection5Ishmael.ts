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
import { ShiAssocSouthSection5IshmaelDefense } from "./ShiAssocSouthSection5IshmaelDefense";
import { ShiAssocSouthSection5IshmaelSkill1 } from "./ShiAssocSouthSection5IshmaelSkill1";
import { ShiAssocSouthSection5IshmaelSkill2 } from "./ShiAssocSouthSection5IshmaelSkill2";
import { ShiAssocSouthSection5IshmaelSkill3 } from "./ShiAssocSouthSection5IshmaelSkill3";

export const ShiAssocSouthSection5Ishmael: Identity = {
    Id: 10803,
    Name: "Shi Assoc. South Section 5",
    Sinner: SinnerEnum.Ishmael,
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
    Skills: [ShiAssocSouthSection5IshmaelSkill1, 
            ShiAssocSouthSection5IshmaelSkill2, 
            ShiAssocSouthSection5IshmaelSkill3, 
            ShiAssocSouthSection5IshmaelDefense],
    Passives: [
        new Passive("Walking the Line of Death",
            PassiveTypeEnum.Combat,
            "At less than 50% HP, gain 1 additional [Poise] from skills.",
            [{ sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Strife",
            PassiveTypeEnum.Support,
            "1 ally with the least HP gains +2 counter skill final Power.",
            [{ sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/ShiAssociationSouthSection5/10803gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/ShiAssociationSouthSection5/10803gacksunginfo.png"
}