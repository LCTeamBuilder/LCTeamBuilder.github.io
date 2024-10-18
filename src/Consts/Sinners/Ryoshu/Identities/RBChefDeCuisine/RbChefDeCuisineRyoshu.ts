import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { RbChefDeCuisineRyoshuSkill1 } from "./RbChefDeCuisineRyoshuSkill1";
import { RbChefDeCuisineRyoshuSkill2 } from "./RbChefDeCuisineRyoshuSkill2";
import { RbChefDeCuisineRyoshuSkill3 } from "./RbChefDeCuisineRyoshuSkill3";
import { RbChefDeCuisineRyoshuDefense } from "./RbChefDeCuisineRyoshuDefense";

export class RbChefDeCuisineRyoshu implements IdentityBase{
    readonly Id: number = 10404;
    readonly Name: string = "R.B. Chef de Cuisine";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 70;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RbChefDeCuisineRyoshuSkill1, 
                                new RbChefDeCuisineRyoshuSkill2, 
                                new RbChefDeCuisineRyoshuSkill3, 
                                new RbChefDeCuisineRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("Rustle Up",
            PassiveTypeEnum.Combat,
            "After defeating an enemy, heal the ally with the least HP for 15 HP. (Once per turn.)<br>"+
            "If this unit has an [Appetite], spend it to boost the healing based on its Count.",
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Artistic Flavor",
            PassiveTypeEnum.Support,
            "When an enemy is defeated, the ally with the least HP heals 15 HP. (Once per turn.)",
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/RBChefDeCuisine/10404gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/RBChefDeCuisine/10404gacksunginfo.png";
}