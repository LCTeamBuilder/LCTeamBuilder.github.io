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
import { SevenAssocSouthSection6RyoshuDefense } from "./SevenAssocSouthSection6RyoshuDefense";
import { SevenAssocSouthSection6RyoshuSkill1 } from "./SevenAssocSouthSection6RyoshuSkill1";
import { SevenAssocSouthSection6RyoshuSkill2 } from "./SevenAssocSouthSection6RyoshuSkill2";
import { SevenAssocSouthSection6RyoshuSkill3 } from "./SevenAssocSouthSection6RyoshuSkill3";

export const SevenAssocSouthSection6Ryoshu: Identity = {
    Id: 10402,
    Name: "Seven Assoc. South Section 6",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 63,
    HealthPerLevel: 2.17,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [SevenAssocSouthSection6RyoshuSkill1, 
            SevenAssocSouthSection6RyoshuSkill2, 
            SevenAssocSouthSection6RyoshuSkill3, 
            SevenAssocSouthSection6RyoshuDefense],
    Passives: [
        new Passive("C. I. H.",
            PassiveTypeEnum.Combat,
            "Deal +10% Slash damage this turn.",
            [{ sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Ice Breaker",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP inflicts +1 [Rupture]",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/SevenAssociationSouthSection6/10402gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/SevenAssociationSouthSection6/10402gacksunginfo.png"
}