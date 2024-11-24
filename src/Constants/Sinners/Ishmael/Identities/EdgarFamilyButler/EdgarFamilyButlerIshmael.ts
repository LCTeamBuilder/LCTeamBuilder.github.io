import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { EdgarFamilyButlerIshmaelSkill1 } from "./EdgarFamilyButlerIshmaelSkill1";
import { EdgarFamilyButlerIshmaelSkill2 } from "./EdgarFamilyButlerIshmaelSkill2";
import { EdgarFamilyButlerIshmaelSkill3 } from "./EdgarFamilyButlerIshmaelSkill3";
import { EdgarFamilyButlerIshmaelDefense } from "./EdgarFamilyButlerIshmaelDefense";

export class EdgarFamilyButlerIshmael implements Identity{
    readonly Id: number = 10809;
    readonly Name: string = "Edgar Family Butler";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 73;
    readonly HealthPerLevel: number = 2.51;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -1;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new EdgarFamilyButlerIshmaelSkill1, 
                                new EdgarFamilyButlerIshmaelSkill2, 
                                new EdgarFamilyButlerIshmaelSkill3, 
                                new EdgarFamilyButlerIshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Deep Cleaning",
            PassiveTypeEnum.Combat,
            "If this unit Critically Hits against targets with Slower Speed than this unit's, inflict 1 additional Potency for negative effects with its Skills (3 times per turn)",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Loyal Supporter",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed attacks a target with [Sinking], deal +1% more damage for every 1 [Sinking] on target (max 20%)",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/EdgarFamilyButler/10809gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/EdgarFamilyButler/10809gacksunginfo.png";
}