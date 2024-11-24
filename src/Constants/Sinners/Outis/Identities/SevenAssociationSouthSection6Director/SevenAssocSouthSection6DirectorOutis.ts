import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { SevenAssocSouthSection6DirectorOutisSkill1 } from "./SevenAssocSouthSection6DirectorOutisSkill1";
import { SevenAssocSouthSection6DirectorOutisSkill2 } from "./SevenAssocSouthSection6DirectorOutisSkill2";
import { SevenAssocSouthSection6DirectorOutisSkill3 } from "./SevenAssocSouthSection6DirectorOutisSkill3";
import { SevenAssocSouthSection6DirectorOutisDefense } from "./SevenAssocSouthSection6DirectorOutisDefense";

export class SevenAssocSouthSection6DirectorOutis implements Identity{
    readonly Id: number = 11104;
    readonly Name: string = "Seven Assoc. South Section 6 Director";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 86;
    readonly HealthPerLevel: number = 2.96;
    readonly SpeedMin: number = 5;
    readonly SpeedMax: number = 8;
    readonly StaggerHpPercentThresholds: number[] = [60];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new SevenAssocSouthSection6DirectorOutisSkill1, 
                                new SevenAssocSouthSection6DirectorOutisSkill2, 
                                new SevenAssocSouthSection6DirectorOutisSkill3, 
                                new SevenAssocSouthSection6DirectorOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Grasping Vulnerabilities",
            PassiveTypeEnum.Combat,
            'When attacking a target with a damage type the target is "Weak" or "Fatal" to, deal +10% damage.',
            [{sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Relay Intelligence",
            PassiveTypeEnum.Support,
            '1 ally with the highest Speed deals +10% damage when attacking a target with a damage type the target is "Weak" or "Fatal" to.',
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/SevenAssociationSouthSection6Director/11104gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/SevenAssociationSouthSection6Director/11104gacksunginfo.png";
}