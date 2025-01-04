import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const LobotomyEgoMagicBulletOutisDefense: Skill = {
    Name: "The Price of a Bullet",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Magic Bullet] (Once per turn)<br>"+
            "[On Use] Gain Final Power equal to ([Magic Bullet] x2)<br>"+
            "[Skill End] Lose SP equal to [Magic Bullet]")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/ThePriceOfABullet.png"
}

const LobotomyEgoMagicBulletOutisSkill1: Skill = {
    Name: "Ignition",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 3 [Burn] on target (Max 3)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Dark Flame] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Dark Flame] on target", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/Ignition.png"
}

const LobotomyEgoMagicBulletOutisSkill2: Skill = {
    Name: "Detonate Magic Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 6 [Burn] on target (Max 3)"),
        new SkillDescriptionPart("[On Hit] At less than 4 [Magic Bullet], gain 1 [Magic Bullet], then, inflict [Dark Flame] equal to [Magic Bullet] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Dark Flame] on target", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/DetonateMagicBullet.png"
}

const LobotomyEgoMagicBulletOutisSkill3: Skill = {
    Name: "Magic Bullet Fire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 15,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +1% damage for every [Burn] on target (Max 30%)<br><br>"+

            "[Before Attack] Gain 1 [Magic Bullet]<br>"+
            "- Lose (([Magic Bullet] -1)x5) SP<br>"+
            "- Atk Weight becomes equal to [Magic Bullet] value<br>"+
            "- At 10 or less SP, 50% chance to attack indiscriminately<br><br>"+

            "[After Attack] If at 7 [Magic Bullet], reset to 0 (Counts as spending the last Ammo)"),
        new SkillDescriptionPart("[On Hit] Inflict [Dark Flame] equal to [Magic Bullet] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/LobotomyEGOMagicBullet/MagicBulletFire.png"
}

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