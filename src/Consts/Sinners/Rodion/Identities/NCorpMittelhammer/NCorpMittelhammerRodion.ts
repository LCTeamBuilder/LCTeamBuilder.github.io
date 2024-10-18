import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { NCorpMittelhammerRodionSkill1 } from "./NCorpMittelhammerRodionSkill1";
import { NCorpMittelhammerRodionSkill2 } from "./NCorpMittelhammerRodionSkill2";
import { NCorpMittelhammerRodionSkill3 } from "./NCorpMittelhammerRodionSkill3";
import { NCorpMittelhammerRodionDefense } from "./NCorpMittelhammerRodionDefense";

export class NCorpMittelhammerRodion implements IdentityBase{
    readonly Id: number = 10904;
    readonly Name: string = "N Corp. Mittelhammer";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new NCorpMittelhammerRodionSkill1, 
                                new NCorpMittelhammerRodionSkill2, 
                                new NCorpMittelhammerRodionSkill3, 
                                new NCorpMittelhammerRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Joy of Execution",
            PassiveTypeEnum.Combat,
            "After an enemy is defeated, gain 1 [Haste] and 1 [Damage Up] next turn.<br>"+
            "If this unit defeated an enemy, also gain 1 [Fanatic]. (Once per turn.)",
            [{sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Rising Faith",
            PassiveTypeEnum.Support,
            "After an enemy is defeated, apply 1 [Haste] and 1 [Damage Up] to the ally with the most SP. (Once per turn.)",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/NCorpMittelhammer/10904gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/NCorpMittelhammer/10904gacksunginfo.png";
}