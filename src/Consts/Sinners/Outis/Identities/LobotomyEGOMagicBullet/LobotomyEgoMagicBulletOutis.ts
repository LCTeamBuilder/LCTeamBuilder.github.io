import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LobotomyEgoMagicBulletOutisSkill1 } from "./LobotomyEgoMagicBulletOutisSkill1";
import { LobotomyEgoMagicBulletOutisSkill2 } from "./LobotomyEgoMagicBulletOutisSkill2";
import { LobotomyEgoMagicBulletOutisSkill3 } from "./LobotomyEgoMagicBulletOutisSkill3";
import { LobotomyEgoMagicBulletOutisDefense } from "./LobotomyEgoMagicBulletOutisDefense";

export class LobotomyEgoMagicBulletOutis implements IdentityBase{
    readonly Id: number = 11107;
    readonly Name: string = "Lobotomy E.G.O::Magic Bullet";
    readonly Sinner: SinnerEnum = SinnerEnum.Outis;
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
    readonly Skills: Skill[] = [new LobotomyEgoMagicBulletOutisSkill1, 
                                new LobotomyEgoMagicBulletOutisSkill2, 
                                new LobotomyEgoMagicBulletOutisSkill3, 
                                new LobotomyEgoMagicBulletOutisDefense];
    readonly Passives: Passive[] = [
        new Passive("The Marksman's Smoking Pipe",
            PassiveTypeEnum.Combat,
            "If the main target's Defense Level is currently lowered by 4 or more, gain ([Burn] on main target) [Poise] Before Attack (Max 20 per turn)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Request Work",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% damage with E.G.O Skills<br>"+
            "If the E.G.O Skill consumes 7+ E.G.O resources, deal additional +5% damage",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Outis/Identities/LobotomyEGOMagicBullet/11107gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Outis/Identities/LobotomyEGOMagicBullet/11107gacksunginfo.png";
}