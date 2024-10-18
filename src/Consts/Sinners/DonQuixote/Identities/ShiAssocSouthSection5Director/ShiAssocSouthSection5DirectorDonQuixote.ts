import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { ShiAssocSouthSection5DirectorDonQuixoteSkill1 } from "./ShiAssocSouthSection5DirectorDonQuixoteSkill1";
import { ShiAssocSouthSection5DirectorDonQuixoteSkill2 } from "./ShiAssocSouthSection5DirectorDonQuixoteSkill2";
import { ShiAssocSouthSection5DirectorDonQuixoteSkill3 } from "./ShiAssocSouthSection5DirectorDonQuixoteSkill3";
import { ShiAssocSouthSection5DirectorDonQuixoteDefense } from "./ShiAssocSouthSection5DirectorDonQuixoteDefense";

export class ShiAssocSouthSection5DirectorDonQuixote implements IdentityBase{
    readonly Id: number = 10303;
    readonly Name: string = "Shi Assoc. South Section 5 Director";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [80, 60];
    readonly DefenseLevel: number = -4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new ShiAssocSouthSection5DirectorDonQuixoteSkill1, 
                                new ShiAssocSouthSection5DirectorDonQuixoteSkill2, 
                                new ShiAssocSouthSection5DirectorDonQuixoteSkill3, 
                                new ShiAssocSouthSection5DirectorDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Prepared Mind",
            PassiveTypeEnum.Combat,
            "Gain [Haste] by (Wrath Reson. / 3) next turn.",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Divide in Two",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed deals +10% Slash damage.",
            [{sin: SinEnum.Wrath, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/ShiAssocSouthSection5Director/10303gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/ShiAssocSouthSection5Director/10303gacksunginfo.png";
}