import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LosMariachisJefeSinclairSkill1 } from "./LosMariachisJefeSinclairSkill1";
import { LosMariachisJefeSinclairSkill2 } from "./LosMariachisJefeSinclairSkill2";
import { LosMariachisJefeSinclairSkill3 } from "./LosMariachisJefeSinclairSkill3";
import { LosMariachisJefeSinclairDefense } from "./LosMariachisJefeSinclairDefense";

export class LosMariachisJefeSinclair implements Identity{
    readonly Id: number = 11004;
    readonly Name: string = "Los Mariachis Jefe";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 95;
    readonly HealthPerLevel: number = 3.26;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 3;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LosMariachisJefeSinclairSkill1, 
                                new LosMariachisJefeSinclairSkill2, 
                                new LosMariachisJefeSinclairSkill3, 
                                new LosMariachisJefeSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Júbilo Hedonista",
            PassiveTypeEnum.Combat,
            "After a successful evade, lower Stagger Threshold by the evade skill's Power at a (5x Gloom Reson.)% chance.",
            [{sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Jugar con Enemigos",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% damage to enemies with lower SP.",
            [{sin: SinEnum.Gloom, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/JefeDeLosMariachis/11004gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/JefeDeLosMariachis/11004gacksunginfo.png";
}