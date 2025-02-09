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

const ThoracalgiaRyoshuAwakening: Skill = {
    Name: "Thoracalgia",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 8,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson.) [Poise] (max 6)<br>"+
            "- At 15+ [Poise], gain Final Power +(highest Reson.) instead (max 6)<br>"+
            "[Before Attack] Gain (highest Reson. / 2) [Poise] Count (max 3)<br>"+
            "- At 5+ [Poise] Count, gain Coin Power +(highest Reson. / 2) instead (max 3)<br>"+
            "[On Target Kill] Gain 2 [Deep Breath] next turn (6 times per turn)"),
        new SkillDescriptionPart("Deal +([Poise] Potency + Count)% more damage on Critical Hit (max 40%)<br>"+
            "[On Hit] Gain 4 [Deep Breath] (once per turn)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/Thoracalgia/20408awakenprofile.png'
}

const ThoracalgiaRyoshuCorrosion: Skill = {
    Name: "Thoracalgia",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 24,
    Coins: 2,
    CoinValue: -8,
    AttackWeight: 4,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate] Prioritizes targets with the least HP (prioritizes allies)<br>"+
            "If an ally is one of this Skill's targets, deal +30% more damage<br>"+
            "[Before Attack] At less than 15 [Poise], consume 10% HP to gain 5 [Poise] and +5 [Poise] Count<br>"+
            "- Cannot be Staggered or defeated due to this effect<br>"+
            "- Gain 2 [Poise] for every ally targeted by this Skill (max 4)<br>"+
            "[After Attack] If the target is defeated, gain 3 [Deep Breath] next turn. (once per turn) If an ally is also defeated by this Skill, activate the following as well:<br>"+
            "- Allies that are made to participate or are Substituted into this Encounter due to the defeated allies gain 4 [Poise] and +4 [Poise] Count<br>"+
            "- Recover SP used by this Skill, and regain 1 of each E.G.O resources consumed"),
        new SkillDescriptionPart("Deal +([Poise] Potency + Count)% more damage on Critical Hit (max 40%)<br>"+
            "[On Hit] Gain 7 [Deep Breath] (once per turn)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Ryoshu/EGO/Thoracalgia/20408erosionprofile.png'
}

export const ThoracalgiaRyoshu: Ego = {
    Id: 20408,
    Name: "Thoracalgia",
    Sinner: SinnerEnum.Ryoshu,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: ThoracalgiaRyoshuAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: ThoracalgiaRyoshuCorrosion,
    CorrosionSanityCost: 38,
    Passive: new Passive("Breath", PassiveTypeEnum.Ego, "Next Turn Start after using this E.G.O Skill: gain 1 [Nebulizer Beta] (once per turn)<br>"+
        "- If this Skill defeated enemies, gain additional [Nebulizer Beta] equal to the number of targets defeated<br>"+
        "- If this Skill defeated allies, gain (targets defeated x 2) additional [Nebulizer Beta]<br>"+
        "- This value Stacks over this Encounter's duration"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 1 },
            { sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Pride, amount: 5 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Ryoshu/EGO/Thoracalgia/20408cg.png'
}