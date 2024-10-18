import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyEgoLanternDonQuixoteSkill1 } from "./LobotomyEgoLanternDonQuixoteSkill1";
import { LobotomyEgoLanternDonQuixoteSkill2 } from "./LobotomyEgoLanternDonQuixoteSkill2";
import { LobotomyEgoLanternDonQuixoteSkill3 } from "./LobotomyEgoLanternDonQuixoteSkill3";
import { LobotomyEgoLanternDonQuixoteDefense } from "./LobotomyEgoLanternDonQuixoteDefense";

export class LobotomyEgoLanternDonQuixote implements IdentityBase{
    readonly Id: number = 10307;
    readonly Name: string = "Lobotomy E.G.O::Lantern";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [50, 20];
    readonly DefenseLevel: number = +4;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LobotomyEgoLanternDonQuixoteSkill1, 
                                new LobotomyEgoLanternDonQuixoteSkill2, 
                                new LobotomyEgoLanternDonQuixoteSkill3, 
                                new LobotomyEgoLanternDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Om Nom Nom",
            PassiveTypeEnum.Combat,
            "If this unit's Skill Slot has [Aggro], Clash Power +1<br>"+
            "Heal 6 HP every time this unit hits enemies that targeted this unit with an Attack Skill in the Chaining Phase (For Abnormalities, each Part is calculated separately)",
            [{sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Illumilantern",
            PassiveTypeEnum.Support,
            "The ally with the highest [Aggro] Skill Slot heals 4 HP every time they hit an enemy that targets this unit (Does not apply to units without [Aggro])",
            [{sin: SinEnum.Gluttony, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/LobotomyEGOLantern/10307gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/LobotomyEGOLantern/10307gacksunginfo.png";
}