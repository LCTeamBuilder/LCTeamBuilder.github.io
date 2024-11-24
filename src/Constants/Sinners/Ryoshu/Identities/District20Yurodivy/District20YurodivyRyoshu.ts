import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { District20YurodivyRyoshuSkill1 } from "./District20YurodivyRyoshuSkill1";
import { District20YurodivyRyoshuSkill2 } from "./District20YurodivyRyoshuSkill2";
import { District20YurodivyRyoshuSkill3 } from "./District20YurodivyRyoshuSkill3";
import { District20YurodivyRyoshuDefense } from "./District20YurodivyRyoshuDefense";

export class District20YurodivyRyoshu implements Identity{
    readonly Id: number = 10409;
    readonly Name: string = "District 20 Yurodivy";
    readonly Sinner: SinnerEnum = SinnerEnum.Ryoshu;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 71;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new District20YurodivyRyoshuSkill1, 
                                new District20YurodivyRyoshuSkill2, 
                                new District20YurodivyRyoshuSkill3, 
                                new District20YurodivyRyoshuDefense];
    readonly Passives: Passive[] = [
        new Passive("N.O.",
            PassiveTypeEnum.Combat,
            "- When an other ally Staggers an enemy with an attack: follow up with a Skill 1 against the Staggered enemy. (once per Turn)<br>"+
            "- If multiple enemies are Staggered at once, target the enemy with the least HP (for Abnormalities, target the Abnormality with the least HP; then, target the Part with the least HP).<br>"+
            "- When using Skill 1 with this effect, this unit gains +1 more [Tremor] Count from its Coin effects, and triggers a [Tremor Burst] with the last Coin On Hit",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("The A.I.",
            PassiveTypeEnum.Support,
            "#1 Deployed ally gains +1 more [Tremor] Count from their Skill or Coin effects (2 times per turn)",
            [{sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ryoshu/Identities/District20Yurodivy/10409gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ryoshu/Identities/District20Yurodivy/10409gacksunginfo.png";
}