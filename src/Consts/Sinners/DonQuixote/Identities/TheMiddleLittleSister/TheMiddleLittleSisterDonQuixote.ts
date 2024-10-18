import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { TheMiddleLittleSisterDonQuixoteSkill1 } from "./TheMiddleLittleSisterDonQuixoteSkill1";
import { TheMiddleLittleSisterDonQuixoteSkill2 } from "./TheMiddleLittleSisterDonQuixoteSkill2";
import { TheMiddleLittleSisterDonQuixoteSkill3 } from "./TheMiddleLittleSisterDonQuixoteSkill3";
import { TheMiddleLittleSisterDonQuixoteDefense } from "./TheMiddleLittleSisterDonQuixoteDefense";

export class TheMiddleLittleSisterDonQuixote implements IdentityBase{
    readonly Id: number = 10306;
    readonly Name: string = "The Middle Little Sister";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 86;
    readonly HealthPerLevel: number = 2.95;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [50, 20];
    readonly DefenseLevel: number = +5;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheMiddleLittleSisterDonQuixoteSkill1, 
                                new TheMiddleLittleSisterDonQuixoteSkill2, 
                                new TheMiddleLittleSisterDonQuixoteSkill3, 
                                new TheMiddleLittleSisterDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Vengeance Tattoo",
            PassiveTypeEnum.Combat,
            "- Gain 1 [Envy DMG Up] next turn every time the enemies strike an ally (including this unit) 3 times. (Max 5)<br>"+
            "- Apply [Vengeance Mark] to the unit that dealt the most Skill damage to an ally.<br>"+
            "- If the main target has [Vengeance Mark], Coin Power +1",
            [{sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Favoritism",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains 1 [Blunt DMG Up] next turn every time the enemies strike an ally (not including this unit) 6 times. (Max 2)",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/TheMiddleLittleSister/10306gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/TheMiddleLittleSister/10306gacksunginfo.png";
}