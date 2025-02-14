import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const ElectricScreamingDonQuixoteAwakening: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 2,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain +1 Atk Weight (Max. 3) for every Envy Reson. above 2<br>"+
            "[Before Attack] Deal +((Envy Reson. - 3) x 10)% more damage (max 30%)<br>"+
            "[Before Attack] If this unit has 20+ [Charge] Count, Spend 20 [Charge] Count to deal +40% more damage<br>"), 
        new SkillDescriptionPart("[On Kill] Gain +2 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306awakenprofile.png'
}

const ElectricScreamingDonQuixoteCorrosion: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets Randomly<br>"+
        "[Before Attack] Gain +1 Atk Weight (Max. 3) for every Envy Reson. above 2<br>"+
        "[Before Attack] Deal +((Envy Reson. - 3) x 12)% more damage (max 36%)<br>"+
        "[Before Attack] At less than 20 [Charge] Count, spend 1% of this unit's Max HP per missing [Charge] Count to raise [Charge] Count to 20<br>"+
        "[Before Attack] Spend up to 20 [Charge] to deal +5% more damage for every spent [Charge] Count (max 100%)"),
        new SkillDescriptionPart("[On Kill] Gain +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306erosionprofile.png'
}

export const ElectricScreamingDonQuixote: Ego = {
    Id: 20306,
    Name: "Electric Screaming",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: ElectricScreamingDonQuixoteAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: ElectricScreamingDonQuixoteCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Tempestuous Screaming", PassiveTypeEnum.Ego, "If the target is defeated at this unit's Slash or Envy Affinity Skill End, gain 1 [Attack Power Up] next turn (once per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 4 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306cg.png'
}