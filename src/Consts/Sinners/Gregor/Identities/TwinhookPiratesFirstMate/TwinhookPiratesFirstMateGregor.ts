import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TwinhookPiratesFirstMateGregorSkill1 } from "./TwinhookPiratesFirstMateGregorSkill1";
import { TwinhookPiratesFirstMateGregorSkill2 } from "./TwinhookPiratesFirstMateGregorSkill2";
import { TwinhookPiratesFirstMateGregorSkill3 } from "./TwinhookPiratesFirstMateGregorSkill3";
import { TwinhookPiratesFirstMateGregorDefense } from "./TwinhookPiratesFirstMateGregorDefense";

export class TwinhookPiratesFirstMateGregor implements IdentityBase{
    readonly Id: number = 11207;
    readonly Name: string = "Twinhook Pirates First Mate";
    readonly Sinner: SinnerEnum = SinnerEnum.Gregor;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TwinhookPiratesFirstMateGregorSkill1, 
                                new TwinhookPiratesFirstMateGregorSkill2, 
                                new TwinhookPiratesFirstMateGregorSkill3, 
                                new TwinhookPiratesFirstMateGregorDefense];
    readonly Passives: Passive[] = [
        new Passive("Bullets are Pricey",
            PassiveTypeEnum.Combat,
            "- Always Activate: Begin encounters with 7 [Ammo]<br>"+
            "- On Heads Hit against target with [Bleed], gain [Unjust Enrichment]. (Max 4)<br>"+
            "If a Coin that uses [Ammo] hits, consume all [Unjust Enrichment] and deal (25 x [Unjust Enrichment] consumed)% of damage dealt as bonus damage.<br>"+
            "- If this unit Critical Hits when out of [Ammo], consume all [Unjust Enrichment] and deal (5 x [Unjust Enrichment] consumed)% of damage dealt as bonus damage",
            [{sin: SinEnum.Pride, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("New Breathing Hole",
            PassiveTypeEnum.Support,
            "If 1 ally with the most [Poise] defeats an enemy, gain 1 [Pierce DMG Up] next turn. (Once per turn)",
            [{sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Gregor/Identities/TwinhookPiratesFirstMate/11207gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Gregor/Identities/TwinhookPiratesFirstMate/11207gacksunginfo.png";
}