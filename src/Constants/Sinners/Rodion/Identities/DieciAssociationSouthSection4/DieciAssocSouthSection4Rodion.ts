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
import { DieciAssocSouthSection4RodionDefense } from "./DieciAssocSouthSection4RodionDefense";
import { DieciAssocSouthSection4RodionSkill1 } from "./DieciAssocSouthSection4RodionSkill1";
import { DieciAssocSouthSection4RodionSkill2 } from "./DieciAssocSouthSection4RodionSkill2";
import { DieciAssocSouthSection4RodionSkill3 } from "./DieciAssocSouthSection4RodionSkill3";

export const DieciAssocSouthSection4Rodion: Identity = {
    Id: 10907,
    Name: "Dieci Assoc. South Section 4",
    Sinner: SinnerEnum.Rodion,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 88,
    HealthPerLevel: 3.1,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4RodionSkill1, 
            DieciAssocSouthSection4RodionSkill2, 
            DieciAssocSouthSection4RodionSkill3, 
            DieciAssocSouthSection4RodionDefense],
    Passives: [
        new Passive("Incandescent Enlightenment",
            PassiveTypeEnum.Combat,
            "Gain [Blunt DMG Up] next turn based on the damage that this unit took this turn.<br>"+
            "(Shield damage included in the calculation. Maxes out when taking damage equal to 25% of Max HP at turn start. Max [Blunt DMG Up] gained by this effect: 5)<br>"+
            "If this unit has 3 [Insight] at the end of the turn, remove 1 negative effect applied to self",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Missionary of Knowledge",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP gains [Blunt DMG Up] next turn based on the damage that they took this turn.<br>"+
            "(Shield damage included in the calculation. Maxes out when taking damage equal to 15% of Max HP at turn start. Max [Blunt DMG Up] gained by this effect: 3)",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Rodion/Identities/DieciAssociationSouthSection4/10907gacksung.png",
    PortraitImageDir: "./assets/Sinners/Rodion/Identities/DieciAssociationSouthSection4/10907gacksunginfo.png"
}