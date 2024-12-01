import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { LobotomyEgoMagicBulletOutisDefense } from "./LobotomyEgoMagicBulletOutisDefense";
import { LobotomyEgoMagicBulletOutisSkill1 } from "./LobotomyEgoMagicBulletOutisSkill1";
import { LobotomyEgoMagicBulletOutisSkill2 } from "./LobotomyEgoMagicBulletOutisSkill2";
import { LobotomyEgoMagicBulletOutisSkill3 } from "./LobotomyEgoMagicBulletOutisSkill3";

export const LobotomyEgoMagicBulletOutis: Identity = {
    Id: 11107,
    Name: "Lobotomy E.G.O::Magic Bullet",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LobotomyEgoMagicBulletOutisSkill1, 
            LobotomyEgoMagicBulletOutisSkill2, 
            LobotomyEgoMagicBulletOutisSkill3, 
            LobotomyEgoMagicBulletOutisDefense],
    Passives: [
        new Passive("The Marksman's Smoking Pipe",
            PassiveTypeEnum.Combat,
            "If the main target's Defense Level is currently lowered by 4 or more, gain ([Burn] on main target) [Poise] Before Attack (Max 20 per turn)",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Request Work",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% damage with E.G.O Skills<br>"+
            "If the E.G.O Skill consumes 7+ E.G.O resources, deal additional +5% damage",
            [{ sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/LobotomyEGOMagicBullet/11107gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/LobotomyEGOMagicBullet/11107gacksunginfo.png"
}