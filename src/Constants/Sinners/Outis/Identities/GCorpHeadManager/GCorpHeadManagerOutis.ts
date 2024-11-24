import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { GCorpHeadManagerOutisSkill1 } from "./GCorpHeadManagerOutisSkill1";
import { GCorpHeadManagerOutisSkill2 } from "./GCorpHeadManagerOutisSkill2";
import { GCorpHeadManagerOutisSkill3 } from "./GCorpHeadManagerOutisSkill3";
import { GCorpHeadManagerOutisDefense } from "./GCorpHeadManagerOutisDefense";

export class GCorpHeadManagerOutis implements Identity{
    readonly Id: number = 11103;
    readonly Name: string = "G Corp. Head Manager";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new GCorpHeadManagerOutisSkill1, 
                                new GCorpHeadManagerOutisSkill2, 
                                new GCorpHeadManagerOutisSkill3, 
                                new GCorpHeadManagerOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Morale Boost",
            PassiveTypeEnum.Combat,
            "Next turn, apply 2 [Haste] to self and allies who are adjacent to this unit on the Dashboard this turn.",
            [{sin: SinEnum.Sloth, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Resolution",
            PassiveTypeEnum.Support,
            "1 ally with the most HP randomly gains 1 [Attack Power Up], 1 [Defense Power Up], or 1 [Protection] at the start of the combat phase.",
            [{sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/GCorpHeadManager/11103gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/GCorpHeadManager/11103gacksunginfo.png";
}