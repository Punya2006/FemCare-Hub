from utilmeta.core import api
import utype

class BMISchema(utype.Schema):
    value: float = utype.Field(round=2)

    @property
    def level(self) -> int:
        for i, l in enumerate([18.5, 25, 30]):
            if self.value < l:
                return i
        return 3

class RootAPI(api.API):
    @api.get
    def bmi(self, weight: float = utype.Param(gt=0, le=1000), height: float = utype.Param(gt=0, le=4)) -> BMISchema:
        return BMISchema(value=weight / (height ** 2))
