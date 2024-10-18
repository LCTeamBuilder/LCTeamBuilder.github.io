import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { NCorpKleinhammerHeathcliffSkill1 } from "./NCorpKleinhammerHeathcliffSkill1";
import { NCorpKleinhammerHeathcliffSkill2 } from "./NCorpKleinhammerHeathcliffSkill2";
import { NCorpKleinhammerHeathcliffSkill3 } from "./NCorpKleinhammerHeathcliffSkill3";
import { NCorpKleinhammerHeathcliffDefense } from "./NCorpKleinhammerHeathcliffDefense";

export class NCorpKleinhammerHeathcliff implements IdentityBase{
    readonly Id: number = 10704;
    readonly Name: string = "N Corp. Kleinhammer";
    readonly Sinner: SinnerEnum = SinnerEnum.Heathcliff;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 76;
    readonly HealthPerLevel: number = 2.6;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new NCorpKleinhammerHeathcliffSkill1, 
                                new NCorpKleinhammerHeathcliffSkill2, 
                                new NCorpKleinhammerHeathcliffSkill3, 
                                new NCorpKleinhammerHeathcliffDefense];
    readonly Passives: Passive[] = [
        new Passive("Bugger...",
            PassiveTypeEnum.Combat,
            "When an ally is defeated, lose 10 SP and gain 1 [Blunt Power Up] next turn.<br>"+
            "If 4 or more surviving units in the team, including this unit, are 'N Corp. Fanatics', Coin Power +1.",
            [{sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cantillation",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed inflicts +1 [Nails].",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Heathcliff/Identities/NCorpKleinhammer/10704gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Heathcliff/Identities/NCorpKleinhammer/10704gacksunginfo.png";
}