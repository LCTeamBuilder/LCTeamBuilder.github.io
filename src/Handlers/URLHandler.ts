export function UpdateLink() {
    let urlParams = "?v1=";
    globalThis.TeamData.filter(sinner => (sinner.EquipedIdentity.Id % 100 != 1) || sinner.EquipedEgos.length != 1 || (sinner.EquipedEgos[0]!.Id % 100 != 1))
        .forEach(sinner => {
            urlParams += "s" + sinner.SinnerEnum;
            urlParams += "i" + sinner.EquipedIdentity.Id % 100;
            urlParams += "D";
            urlParams += "e";
            sinner.EquipedEgos.filter(ego => (ego.Id % 100 != 1))
                .forEach(ego => {
                    urlParams += ego.Id % 100;
                    urlParams += "D";
                });
        });

    globalThis.TeamLink = (window.location.href + urlParams);
}