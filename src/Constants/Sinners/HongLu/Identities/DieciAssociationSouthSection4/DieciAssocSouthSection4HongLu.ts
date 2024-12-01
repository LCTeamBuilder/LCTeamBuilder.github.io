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
import { DieciAssocSouthSection4HongLuDefense } from "./DieciAssocSouthSection4HongLuDefense";
import { DieciAssocSouthSection4HongLuSkill1 } from "./DieciAssocSouthSection4HongLuSkill1";
import { DieciAssocSouthSection4HongLuSkill2 } from "./DieciAssocSouthSection4HongLuSkill2";
import { DieciAssocSouthSection4HongLuSkill3 } from "./DieciAssocSouthSection4HongLuSkill3";

export const DieciAssocSouthSection4HongLu: Identity = {
    Id: 10608,
    Name: "Dieci Assoc. South Section 4",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.49,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 30],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4HongLuSkill1, 
            DieciAssocSouthSection4HongLuSkill2, 
            DieciAssocSouthSection4HongLuSkill3, 
            DieciAssocSouthSection4HongLuDefense],
    Passives: [
        new Passive("Peering Through a Key",
            PassiveTypeEnum.Combat,
            "When Discarding a Skill, gain 'Damage Up' equal to the Discarded Skill Rank. (Max 3 per turn)<br>"+
            "When other allies Discard a Skill, and if the ally's Discarded Skill rank is higher than this unit's [Insight] value, this unit gains +1 [Insight] .",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Enlightenment",
            PassiveTypeEnum.Support,
            "[After Attack] If the target is in a staggered or defeated state by an attack from 1 ally with the least SP, the ally heals 7 SP.",
            [{ sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/DieciAssociationSouthSection4/10608gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/DieciAssociationSouthSection4/10608gacksunginfo.png"
}