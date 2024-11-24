import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { CinqAssocsouthSection4DirectorSinclairSkill1 } from "./CinqAssocsouthSection4DirectorSinclairSkill1";
import { CinqAssocsouthSection4DirectorSinclairSkill2 } from "./CinqAssocsouthSection4DirectorSinclairSkill2";
import { CinqAssocsouthSection4DirectorSinclairSkill3 } from "./CinqAssocsouthSection4DirectorSinclairSkill3";
import { CinqAssocsouthSection4DirectorSinclairDefense } from "./CinqAssocsouthSection4DirectorSinclairDefense";

export class CinqAssocsouthSection4DirectorSinclair implements Identity{
    readonly Id: number = 11008;
    readonly Name: string = "Cinq Assoc.South Section 4 Director";
    readonly Sinner: SinnerEnum = SinnerEnum.Sinclair;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.71;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new CinqAssocsouthSection4DirectorSinclairSkill1, 
                                new CinqAssocsouthSection4DirectorSinclairSkill2, 
                                new CinqAssocsouthSection4DirectorSinclairSkill3, 
                                new CinqAssocsouthSection4DirectorSinclairDefense];
    readonly Passives: Passive[] = [
        new Passive("Slumbering Bloodlust",
            PassiveTypeEnum.Combat,
            "Turn End: Gain +2 Max Speed next turn for every 5 [Poise] Count (Max 6)<br>"+
            "Combat Start: If Speed of all allies is higher than Speed of all enemies, gain 1 [Pierce DMG Up]",
            [{sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Too Slow",
            PassiveTypeEnum.Support,
            "The fastest ally, On Evade, gains 1 [Haste] next turn (Max 5)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Sinclair/Identities/CinqAssociationSouthSection4Director/11008gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Sinclair/Identities/CinqAssociationSouthSection4Director/11008gacksunginfo.png";
}