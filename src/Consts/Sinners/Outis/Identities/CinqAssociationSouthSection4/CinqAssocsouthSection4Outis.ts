import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { CinqAssocsouthSection4OutisSkill1 } from "./CinqAssocsouthSection4OutisSkill1";
import { CinqAssocsouthSection4OutisSkill2 } from "./CinqAssocsouthSection4OutisSkill2";
import { CinqAssocsouthSection4OutisSkill3 } from "./CinqAssocsouthSection4OutisSkill3";
import { CinqAssocsouthSection4OutisDefense } from "./CinqAssocsouthSection4OutisDefense";

export class CinqAssocsouthSection4Outis implements IdentityBase{
    readonly Id: number = 11106;
    readonly Name: string = "Cinq Assoc.South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [50];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new CinqAssocsouthSection4OutisSkill1, 
                                new CinqAssocsouthSection4OutisSkill2, 
                                new CinqAssocsouthSection4OutisSkill3, 
                                new CinqAssocsouthSection4OutisDefense];
    readonly Passives: Passive[] = [
        new Passive("Redirect",
            PassiveTypeEnum.Combat,
            "On Evade, gain 1 [Haste] next turn; lower this unit's Stagger Threshold by 5 (Max 3)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Mentor's Counsel",
            PassiveTypeEnum.Support,
            "If the fastest ally's Speed is higher than Speed of all enemies, the fastest ally gains Clash Power +1<br>"+
            "If the said ally is a Cinq Association Fixer, the fastest ally deals +10% Pierce Damage",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/CinqAssociationSouthSection4/11106gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/CinqAssociationSouthSection4/11106gacksunginfo.png";
}