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
import { RbChefDeCuisineRyoshuDefense } from "./RbChefDeCuisineRyoshuDefense";
import { RbChefDeCuisineRyoshuSkill1 } from "./RbChefDeCuisineRyoshuSkill1";
import { RbChefDeCuisineRyoshuSkill2 } from "./RbChefDeCuisineRyoshuSkill2";
import { RbChefDeCuisineRyoshuSkill3 } from "./RbChefDeCuisineRyoshuSkill3";

export const RbChefDeCuisineRyoshu: Identity = {
    Id: 10404,
    Name: "R.B. Chef de Cuisine",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [RbChefDeCuisineRyoshuSkill1, 
            RbChefDeCuisineRyoshuSkill2, 
            RbChefDeCuisineRyoshuSkill3, 
            RbChefDeCuisineRyoshuDefense],
    Passives: [
        new Passive("Rustle Up",
            PassiveTypeEnum.Combat,
            "After defeating an enemy, heal the ally with the least HP for 15 HP. (Once per turn.)<br>"+
            "If this unit has an [Appetite], spend it to boost the healing based on its Count.",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Artistic Flavor",
            PassiveTypeEnum.Support,
            "When an enemy is defeated, the ally with the least HP heals 15 HP. (Once per turn.)",
            [{ sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/RBChefDeCuisine/10404gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/RBChefDeCuisine/10404gacksunginfo.png"
}