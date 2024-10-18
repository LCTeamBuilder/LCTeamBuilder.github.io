import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyCorpRemnantFaustSkill1 } from "./LobotomyCorpRemnantFaustSkill1";
import { LobotomyCorpRemnantFaustSkill2 } from "./LobotomyCorpRemnantFaustSkill2";
import { LobotomyCorpRemnantFaustSkill3 } from "./LobotomyCorpRemnantFaustSkill3";
import { LobotomyCorpRemnantFaustDefense } from "./LobotomyCorpRemnantFaustDefense";

export class LobotomyCorpRemnantFaust implements IdentityBase{
    readonly Id: number = 10203;
    readonly Name: string = "Lobotomy Corp. Remnant";
    readonly Sinner: SinnerEnum = SinnerEnum.Faust;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LobotomyCorpRemnantFaustSkill1, 
                                new LobotomyCorpRemnantFaustSkill2, 
                                new LobotomyCorpRemnantFaustSkill3, 
                                new LobotomyCorpRemnantFaustDefense];
    readonly Passives: Passive[] = [
        new Passive("Resolution",
            PassiveTypeEnum.Combat,
            "At the start of the turn, if at 4+ [Poise] Count, gain 2 [Haste].",
            [{sin: SinEnum.Lust, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Backing",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains +2 defense skill final Power.",
            [{sin: SinEnum.Lust, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Faust/Identities/LobotomyCorpRemnant/10203gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Faust/Identities/LobotomyCorpRemnant/10203gacksunginfo.png";
}