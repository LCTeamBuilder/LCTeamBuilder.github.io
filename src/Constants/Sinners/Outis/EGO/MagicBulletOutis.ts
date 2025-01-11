import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const MagicBulletOutisAwakening: Skill = {
    Name: "Magic Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +3% more damage for every 3 [Burn] on the target (max 30%)<br>"+
            "[Before Attack] At 0 [Magic Bullet], gain 1 [Magic Bullet]<br>"+
            "- [Magic Bullet] value determines the bullet to fire<br>"+
            "· [The First Magic Bullet]<br>"+
            "· [The Second Magic Bullet]<br>"+
            "· [The Third Magic Bullet]<br>"+
            "· [The Fourth Magic Bullet]<br>"+
            "· [The Fifth Magic Bullet]<br>"+
            "· [The Sixth Magic Bullet]<br>"+
            "· [The Seventh Magic Bullet]<br>"+
            "[After Attack] Gain [Magic Bullet] by highest Reson. (min. 1, max 4)<br>"+
            "[After Attack] If the main target is defeated, inflict 4 [Dark Flame] against all enemies with [Burn]"),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Magic Bullet]<br>"+
            "[On Hit] Inflict [Dark Flame] equal to [Magic Bullet] (once per turn for each unit)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/MagicBullet/21108awakenprofile.png"
}

const MagicBulletOutisCorrosion: Skill = {
    Name: "Magic Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 40,
    Coins: 1,
    CoinValue: -20,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "Deal +3% more damage for every 3 [Burn] on the target (max 30%)<br>"+
            "[Before Attack] At 0 [Magic Bullet], gain [Magic Bullet]<br>"+
            "- [Magic Bullet] value determines the bullet to fire.<br>"+
            "· [The First Magic Bullet]<br>"+
            "· [The Second Magic Bullet]<br>"+
            "· [The Third Magic Bullet]<br>"+
            "· [The Fourth Magic Bullet]<br>"+
            "· [The Fifth Magic Bullet]<br>"+
            "· [The Sixth Magic Bullet]<br>"+
            "· [The Seventh Magic Bullet]<br>"+
            "[After Attack] Gain [Magic Bullet] by highest Reson. (min. 1, max 4)<br>"+
            "[After Attack] If the main target is defeated, inflict 7 [Dark Flame] on all targets (allies and enemies both) with [Burn]"),
        new SkillDescriptionPart("[On Hit] Inflict [Burn] equal to [Magic Bullet]<br>"+
            "[On Hit] Inflict +([Magic Bullet] / 2) [Burn] Count<br>"+
            "[On Hit] Inflict [Dark Flame] equal to [Magic Bullet] (once per turn for each unit)", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Outis/EGO/MagicBullet/21108erosionprofile.png"
}

export const MagicBulletOutis: Ego = {
    Id: 21108,
    Name: "Magic Bullet",
    Sinner: SinnerEnum.Outis,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: MagicBulletOutisAwakening,
    AwakeningSanityCost: 30,
    CorrosionSkill: MagicBulletOutisCorrosion,
    CorrosionSanityCost: 45,
    Passive: new Passive("Seven Bullets", PassiveTypeEnum.Ego, "- On Hit with Base Attack Skills: inflict ([Magic Bullet] / 3) [Burn] (3 times per turn)<br>"+
        "- For Lobotomy E.G.O::Magic Bullet Identity, inflict [Burn] equal to [Magic Bullet] instead (3 times per turn)<br>"+
        "- If the target has 30+ [Burn], inflict [Dark Flame] instead (2 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.75 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 4 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Outis/EGO/MagicBullet/21108cg.png"
}