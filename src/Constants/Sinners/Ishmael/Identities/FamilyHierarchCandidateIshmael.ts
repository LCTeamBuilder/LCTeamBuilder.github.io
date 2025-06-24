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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const FamilyHierarchCandidateIshmaelDefense: Skill = {
    Name: "Adept Evasion",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] At 3+ [Launcher], perform a [Battlefield Retreat] at Turn End<br>" +
            "- Upon Retreat, move to the frontmost place in the Backup units' Deployment order (Returns first before the other Backup units Substitute in)<br>" +
            "[On Use] Gain +1 [Poise] Count (2 times per turn)<br>" +
            "[On Evade] Gain 2 [Poise] (2 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/FamilyHierarchCandidate/1081204.png'
}

const FamilyHierarchCandidateIshmaelSkill11: Skill = {
    Name: "Crimson Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 5+ types of negative effects, Clash Power +1<br>" +
            "[On Use] Coin Power +1 for every 3 [Rupture] on target (max 2)<br>" +
            "[Clash Win] Gain 3 [Poise] and +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Rupture]<br>" +
            "[On Crit] Gain 1 [Offense Level Up] next turn (2 times per turn)", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/FamilyHierarchCandidate/1081201.png'
}

const FamilyHierarchCandidateIshmaelSkill12: Skill = {
    Name: "Crimson Strike - Launcher [始]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 2,
    Coins: 2,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Unclashable]<br>" +
            "[Before Attack] Consume all [Ready] on self to gain +([Ready] on self x 2) Atk Weight (max 5)<br>" +
            "[On Use] Gain 5 [Poise] and +2 [Poise] Count<br>" +
            "[On Use] At 3+ [Ready], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/FamilyHierarchCandidate/1081205.png'
}

const FamilyHierarchCandidateIshmaelSkill2: Skill = {
    Name: "Crimson Phoenix",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If target has 5+ types of negative effects, Coin Power +1<br>" +
            "[On Use] If target has 4+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Crit] Inflict 2 [Defense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Rupture] Count<br>" +
            "[On Crit] Inflict 2 [Defense Level Down] next turn", 2),
        new SkillDescriptionPart("[On Hit] Gain [Poise] equal to [Rupture] on target (max 5)<br>" +
            "[Heads Hit] Gain [Poise] Count equal to [Rupture] Count on target (max 3)", 3),
        new SkillDescriptionPart("Deal +(20 + [Poise] on self + [Rupture] on target)% damage on Critical Hit (max 50%)<br>" +
            "[On Crit Kill Against Enemy] Gain 3 [Offense Level Up] next turn (once per turn)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/FamilyHierarchCandidate/1081202.png'
}

const FamilyHierarchCandidateIshmaelSkill3: Skill = {
    Name: "Crimson Spring",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +14,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] If main target has 5+ types of negative effects, Atk Weight +1<br>" +
            "[Before Attack] At 3+ [Launcher], Atk Weight +1<br>" +
            "[On Use] Coin Power +2 for every 3 types of negative effect on main target (max 6)<br>" +
            "[On Use] Coin Power +1 for every 7 (sum of [Rupture] + [Rupture] Count on main target) (max 5)<br>" +
            "[Clash Win] Gain 4 [Poise]"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "Deal +(50 + [Poise] on self + [Rupture] on main target)% damage (max 75%)<br>" +
            "Deal +(80 + [Poise] on self + [Rupture] on main target)% damage on Critical Hit (max 105%)<br>" +
            "+5% Damage on Critical Hit for every [Launcher] on self (max 30%)<br>" +
            "[On Hit] Inflict 5 [Rupture]<br>" +
            "[On Crit] Inflict +1 [Rupture] Count<br>" +
            "[On Crit] Gain 2 [Poise] and +1 [Poise] Count<br>" +
            "[On Crit Kill Against Enemy] Gain +2 [Poise] Count (3 times per turn)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Ishmael/FamilyHierarchCandidate/1081203.png'
}

export const FamilyHierarchCandidateIshmael: Identity = {
    Id: 10812,
    Name: "Family Hierarch Candidate",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 15],
    DefenseLevel: +0,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [FamilyHierarchCandidateIshmaelSkill11, 
            FamilyHierarchCandidateIshmaelSkill12,
            FamilyHierarchCandidateIshmaelSkill2, 
            FamilyHierarchCandidateIshmaelSkill3, 
            FamilyHierarchCandidateIshmaelDefense],
    Passives: [
        new Passive("Launching Maneuver [始動]",
            PassiveTypeEnum.Combat,
            "Upon Retreat: apply 1 [Offense Level Up] next turn to allies in their Deployment order<br>" +
            "- Number of affected allies = [Launcher] Stack on self<br>" +
            "- If the affected ally is a \"Jia Family\" unit, apply 2 [Offense Level Up] next turn instead<br>" +
            "- Does not affect allies that either Return or Substitute next turn<br><br>" +

            "On the turn this unit Substituted or Returned to the field, gain [Ready]; then, at Combat Start, as the very first Skill in the Skill order, use 'Crimson Strike - Launcher【始】' against a random target."),

        new Passive("Rupture-breathing Resolve [破吸自桓]",
            PassiveTypeEnum.Combat,
            "When killing the target with this unit's Attack Skills, gain [Poise] equal to [Rupture] on target (3 per 1 enemy; once per turn)<br>" +
            "- If this unit gained 3 [Poise] with the above effect, gain [Poise] Count equal to [Rupture] Count on target (2 per 1 enemy; once per turn)<br><br>" +

            "In a Clash, if this unit's Offense Level is higher than the target's, Clash Power +1<br><br>" +

            "In a Clash, if this unit's Offense Level is higher than the target's, inflict +1 more [Rupture] Potency or [Rupture] Count with this unit's Base Attack Skills (2 times per turn)",
            [{ sin: SinEnum.Gluttony, amount: 5}],
            PassiveCostTypeEnum.Owned),

        new Passive("Lingering Resolve [餘桓]",
            PassiveTypeEnum.Support,
            "If this unit is defeated in an Encounter, apply [Assist] to the subsequently Substituting Identity (the fastest Backup Unit in the Deployment Order) next turn<br><br>" +

            "In Chain Battles, if this unit is a Backup unit or has Retreated, activate the following:<br>" +
            "- Combat Start: Among units who 1) are at 50% HP or lower, and 2) used a Defense Skill, choose the Identity with the fastest Deployment order. At Turn End, that Identity recovers from Stagger caused by damage and performs a [Battlefield Retreat] (2 times per Encounter)",
            [{ sin: SinEnum.Gluttony, amount: 4}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Ishmael/Identities/FamilyHierarchCandidate/10812gacksung.png',
    PortraitImageDir: './assets/Sinners/Ishmael/Identities/FamilyHierarchCandidate/10812gacksunginfo.png'
}