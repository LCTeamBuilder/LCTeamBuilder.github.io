import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { District20YurodivyHongLuSkill1 } from "./District20YurodivyHongLuSkill1";
import { District20YurodivyHongLuSkill2 } from "./District20YurodivyHongLuSkill2";
import { District20YurodivyHongLuSkill3 } from "./District20YurodivyHongLuSkill3";
import { District20YurodivyHongLuDefense } from "./District20YurodivyHongLuDefense";

export class District20YurodivyHongLu implements IdentityBase{
    readonly Id: number = 10609;
    readonly Name: string = "District 20 Yurodivy";
    readonly Sinner: SinnerEnum = SinnerEnum.HongLu;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 70;
    readonly HealthPerLevel: number = 2.4;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new District20YurodivyHongLuSkill1, 
                                new District20YurodivyHongLuSkill2, 
                                new District20YurodivyHongLuSkill3, 
                                new District20YurodivyHongLuDefense];
    readonly Passives: Passive[] = [
        new Passive("Vibroweld Morph-combat Cane (Unauthorized Invention)",
            PassiveTypeEnum.Combat,
            "Turn End: gain [Damage Up] next turn equal to the number of times this unit triggered [Tremor Burst] this turn (max 3)",
            [{sin: SinEnum.Sloth, amount: 6 }],
            PassiveCostTypeEnum.Owned),

        new Passive("In the Culprit's Shoes",
            PassiveTypeEnum.Support,
            "When #1 Deployed Identity triggers [Tremor Burst] with Skill or Coin effects, 25% chance to trigger an additional [Tremor Burst] (once per turn)",
            [{sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/HongLu/Identities/District20Yurodivy/10609gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/HongLu/Identities/District20Yurodivy/10609gacksunginfo.png";
}