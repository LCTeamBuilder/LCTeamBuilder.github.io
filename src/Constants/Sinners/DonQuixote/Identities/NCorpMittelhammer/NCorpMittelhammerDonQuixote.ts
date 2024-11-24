import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { NCorpMittelhammerDonQuixoteSkill1 } from "./NCorpMittelhammerDonQuixoteSkill1";
import { NCorpMittelhammerDonQuixoteSkill2 } from "./NCorpMittelhammerDonQuixoteSkill2";
import { NCorpMittelhammerDonQuixoteSkill3 } from "./NCorpMittelhammerDonQuixoteSkill3";
import { NCorpMittelhammerDonQuixoteDefense } from "./NCorpMittelhammerDonQuixoteDefense";

export class NCorpMittelhammerDonQuixote implements Identity{
    readonly Id: number = 10304;
    readonly Name: string = "N Corp. Mittelhammer";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 5;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = +1
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new NCorpMittelhammerDonQuixoteSkill1, 
                                new NCorpMittelhammerDonQuixoteSkill2, 
                                new NCorpMittelhammerDonQuixoteSkill3, 
                                new NCorpMittelhammerDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Thou Shalt Hammer!",
            PassiveTypeEnum.Combat,
            "If the target has [Nails], inflict +1 [Tremor] Count.<br>"+
            "If this unit is [Fanatic], inflict +1 [Nails].",
            [{sin: SinEnum.Lust, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Hammer of Zealotry",
            PassiveTypeEnum.Support,
            "1 Fanatic ally with the least SP deals +10% damage.",
            [{sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/NCorpMittelhammer/10304gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/NCorpMittelhammer/10304gacksunginfo.png";
}