import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { RBSouschefGregorSkill1 } from "./RBSouschefGregorSkill1";
import { RBSouschefGregorSkill2 } from "./RBSouschefGregorSkill2";
import { RBSouschefGregorSkill3 } from "./RBSouschefGregorSkill3";
import { RBSouschefGregorDefense } from "./RBSouschefGregorDefense";

export class RBSouschefGregor implements Identity{
    readonly Id: number = 11204;
    readonly Name: string = "R.B. Sous-chef";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.7;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 30];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new RBSouschefGregorSkill1, 
                                new RBSouschefGregorSkill2, 
                                new RBSouschefGregorSkill3, 
                                new RBSouschefGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Packed Pies",
            PassiveTypeEnum.Combat,
            "Heal 8 HP at the start of the combat phase.",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Culinary Aid",
            PassiveTypeEnum.Support,
            "At the start of the combat phase, the ally with the least HP heals 5 HP., Boost the healing of R.B. Chef de Cuisine Ryōshū's Passive 'Rustle Up' by 5.",
            [{sin: SinEnum.Lust, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/RBSouschef/11204gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/RBSouschef/11204gacksunginfo.png";
}