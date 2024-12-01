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
import { DieciAssocSouthSection4YiSangDefense } from "./DieciAssocSouthSection4YiSangDefense";
import { DieciAssocSouthSection4YiSangSkill1 } from "./DieciAssocSouthSection4YiSangSkill1";
import { DieciAssocSouthSection4YiSangSkill2 } from "./DieciAssocSouthSection4YiSangSkill2";
import { DieciAssocSouthSection4YiSangSkill3 } from "./DieciAssocSouthSection4YiSangSkill3";

export const DieciAssocSouthSection4YiSang: Identity = {
    Id: 10108,
    Name: "Dieci Assoc. South Section 4",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4YiSangSkill1, 
                DieciAssocSouthSection4YiSangSkill2, 
                DieciAssocSouthSection4YiSangSkill3, 
                DieciAssocSouthSection4YiSangDefense],
    Passives: [
        new Passive("Sinking Knowledge",
            PassiveTypeEnum.Combat,
            "When attacked, inflict 1 [Sinking] on the attacker. When attacked while Shielded, inflict 1 additional [Sinking] on the attacker. (4 times max)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Reviewed Knowledge",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest Speed Discards a Skill, gain (5 x Discarded Skill rank)% of the Max HP as Shield (2 times per turn)",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/DieciAssociationSouthSection4/10108gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/DieciAssociationSouthSection4/10108gacksunginfo.png"
}