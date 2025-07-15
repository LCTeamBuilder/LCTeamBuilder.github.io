import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { ExtraSkillsEgo, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const TearsOfTheTarnishedBloodHongLuAwakening1: Skill = {
    Name: "Tears of the Tarnished Blood - Inception [始]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 20,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Unclashable]<br>" +
            "Ignores the target's Defense Skill<br>" +
            "This Skill does not hit an enemy<br>" +
            "[After Attack] Gain [Flower-burying Wedge]<br>"),
        new SkillDescriptionPart("This unit takes fixed damage by this Skill's Final Power<br>"+
            "- This damage does not Stagger or reduce this unit's HP below 1", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/HongLu/EGO/TearsOfTheTarnishedBlood/20608awakenprofile.png'
}
const TearsOfTheTarnishedBloodHongLuAwakening2: Skill = {
    Name: "Tears of the Tarnished Blood - The End [終]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +5,
    AttackWeight: 7,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("This Skill does not consume E.G.O Resources<br>" +
            "[Unclashable]<br>" +
            "Deal +3% damage for every [Flower-burying Wedge] on self (max 9%)<br>" +
            "Deal +6% damage for every [Tarnished Blood] on self (max 30%)<br>" +
            "[On Use] Coin Power +1 for every 5 [Rupture] on main target (max 3)<br>" +
            "[On Use] At 3+ [Tarnished Blood], Atk Weight +1 and Base Power +1<br>" +
            "- At 4+ [Tarnished Blood], Atk Weight +1 and Base Power +2 instead<br>" +
            "- At 5+ [Tarnished Blood], Atk Weight +3 and Base Power +3 instead<br>" +
            "[After Attack] Remove [Flower-burying Wedge] and [Tarnished Blood] on self, then dies<br>" +
            "[Before Attack] Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/HongLu/EGO/TearsOfTheTarnishedBlood/20608awakenprofile.png'
}

const TearsOfTheTarnishedBloodHongLuCorrosion: Skill = {
    Name: "Tears of the Tarnished Blood - Inception [始]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 12,
    Coins: 4,
    CoinValue: -2,
    AttackWeight: 7,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>" +
            "Targets Randomly<br>" +
            "[Before Attack] At 4+ highest Reson., Atk Weight +1<br>" +
            "- At 6+ highest Reson., Atk Weight +2 instead<br>" +
            "[Before Attack] -2 Base Power for every Cracked Coin (max -8)<br>" +
            "[After Attack] Gain [Flower-burying Wedge]<br>"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict +2 [Rupture] Count<br>", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict 1 [Rupture]<br>", 2),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict 1 [Rupture]<br>", 3),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict 1 [Rupture]<br>", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/HongLu/EGO/TearsOfTheTarnishedBlood/20608erosionprofile.png'
}

export const TearsOfTheTarnishedBloodHongLu: ExtraSkillsEgo = {
    Id: 20608,
    Name: "Tears of the Tarnished Blood [汚血泣淚]",
    Sinner: SinnerEnum.HongLu,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: TearsOfTheTarnishedBloodHongLuAwakening1,
    ExtraAwakeningSkills: [TearsOfTheTarnishedBloodHongLuAwakening2],
    AwakeningSanityCost: 10,
    CorrosionSkill: TearsOfTheTarnishedBloodHongLuCorrosion,
    ExtraCorrosionSkills: [],
    CorrosionSanityCost: 25,
    Passive: new Passive("Crying Tears", PassiveTypeEnum.Ego, "If the target is defeated after this unit's Attack or Counter Skills:<br>" +
        "- Gain 2 [Haste] next turn (once per turn)<br>" +
        "- To all allies, including this unit: next turn, apply 1 DMG Up to the Damage Type & Affinity of the Skill used to activate this effect (once per turn)<br>" +
        "- Inflict 1 [Attack Power Down] to all enemies next turn (once per turn)<br><br>" +

        "When this unit dies:<br>" +
        "- Apply 1 [Gluttony DMG Up] and [Pierce DMG Up] to all alies next turn (once per turn)<br>" +
        "- Inflict 1 [Attack Power Down] to all enemies next turn (once per turn)<br>"
    ),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 0.5 },
                { sin: SinEnum.Gloom, resistance: 0.5 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Gluttony, amount: 5 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/HongLu/EGO/TearsOfTheTarnishedBlood/20608cg.png'
}