# เงื่อนไขและการตัดสินใจ
ใน Lecture นี้ พี่มงจะขออธิบายเกี่ยวกับหลักการตัดสินใจของโปรแกรมกันนะครับ<br>
โดยปกติแล้ว คอมพิวเตอร์ไม่รู้หรอกว่า หากน้องมี input เข้ามา และน้องต้องการให้มันทำงานต่างกันตามประเภทหรือข้อมูลที่เข้ามา<br>

ตัวอย่างของการตัดสินใจ เช่น
- ถ้าตัวแปร `kumamon` นั้นเท่ากับ 1112 ก็ให้ปรี้นท์ "Hello World" ออกทางหน้าจอ<br>
- แต่หากว่าไม่เท่ากับ 1112 ก็ให้ปรี้นท์ "Go straight to jail" ออกทางหน้าจอ

จากความหมายด้านบน พี่มงก็จะเขียนโลจิคดังนี้
```
ถ้า (ตัวแปร kumamon เท่ากับ 1112) -> ให้ปรี้นท์ผลลัพท์ "Hello World" ออกทางหน้าจอ

แต่หากว่าไม่เป็นไปตามนั้น -> ให้ปรี้นท์ผลลัพท์ "Go straight to jail"
```

และถ้าน้องจะเขียนโปรแกรม Python ก็จะได้แบบนี้
```python
if (kumamon == 1112):
    print("Hello World")
else:
    print("Go straight to jail")
```
อ่านโค้ดออกมั้ยเอ่ย ถ้ายังก็ค่อยๆเรียน lecture นี้ละกันครับ

## Introduction to `IF` statement
`IF` ในภาษาไทย หมายถึง "หาก" หรือ "เมื่อ" หรือ "ถ้า"<br>
และในภาษาโปรแกรมแล้ว หากมีอะไรเป็นจริง ก็จะทำงานบรรทัดที่เกี่ยวข้องกับมัน ตัวอย่างเช่น

```python
if (kumamon == "cute"):
    print("yessssssssssssss")
```

ในโปรแกรมด้านบน ก็จะอ่านเป็นภาษาไทยว่า ถ้าตัวแปรคุมะมง มีค่าเท่ากับ "cute" ก็ให้ทำการปรี้นท์คำว่า "yessssssssssssss" ออกบนหน้าจอ<br>
และเนื่องจากว่า `if (kumamon == "cute")` นั้นเป็นจริง ทำให้รันโค้ดที่เกี่ยวข้องกับมัน นั่นก็คือ `print("yessssssssssssss")` นั่นเองครับ

::: warning
พี่มงใช้ `==` แต่ไม่เลือกที่จะใช้ `=` ก็เพราะว่า<br>
`=` หมายถึงการให้ค่า จากฝั่งขวาที่เป็นข้อมูล ไปสู่ตัวแปรฝั่งซ้ายครับ แต่ <br>
`==` คือการเทียบค่าระหว่าง 2 อย่างครับ
:::

คราวนี้ เราจะมาลองทดสอบกับ input ที่แตกต่างกัน โดยใช้โปรแกรมด้านบนกันครับ

ในตัวอย่างด้านล่างนี้ พี่มงขอกำหนดค่า kumamon เป็น "Happy Kumamon" ก่อนนะครับ
```python
kumamon = "Happy Kumamon"

# และพี่มงก็จะทำการก้อปโปรแกรมด้านบนมาทำงาน
if (kumamon == "cute"):
    print("yessssssssssssss")
```

น้องก็จะสังเกตได้ว่า โปรแกรมมันไม่ปรี้นท์อะไรออกมาเลย<br>
ค่าที่อยู่ในตัวแปร kumamon (ที่มีค่าเป็น "Happy Kumamon") มันไม่ได้เหมือนกับค่าที่เปรียบเทียบ ("cute") หนิ เลยทำให้บรรทัดปรี้นท์ไม่ได้ทำงานเนื่องจากสมการเป็นจริง เลยไม่ทำการรัน

ในตัวอย่างต่อไป พี่มงขอกำหนดค่า kumamon เป็น "cute" ครับ
```python
kumamon = "cute"

# และพี่มงก็จะทำการก้อปโปรแกรมด้านบนมาทำงาน
if (kumamon == "cute"):
    print("yessssssssssssss")
```
โปรแกรมได้ปรี้นท์คำว่า "yessssssssssssss" ออกทางหน้าจอแล้ว ว้าวๆ<br>
ก็เพราะสมการนั้นเป็นจริงนั่นเอง โค้ดที่เกี่ยวข้องเลยทำงานครับ

แต่น้องๆก็จะสงสัยว่า แล้วใช้ `if` หลายบรรทัดได้หรือเปล่าเอ่ย ก็มาลองกันครับ
```python
kumamon = "cute"

if (kumamon == "cute"):
    kumamon = 1112
    print(kumamon)
```
น้องลองคิดตามดูครับ ว่าผลลัพท์จะออกมาเป็นอะไร ลองคิดก่อนอ่านบรรทัดต่อไปนะครับ <br>ถ้าน้องตอบว่า 1112  ก็ถือว่าน้องเข้าใจแล้ว อิอิ

### สมการเป็นจริงก็ต่อเมื่อ
| ลำดับที่ | เหตุการณ์ที่ทำให้เป็นจริง             | ตัวอย่าง                                        |
| ---- | ----------------------------- | --------------------------------------------- |
| 1    | สมการเป็นจริง                   | `if(2 + 2 = 4)`                               |
| 2    | ตัวแปรกับค่าที่เปรียบเทียบมีค่าเท่ากัน   | `kumamon = "cute"`<br>`if(kumamon == "cute")` |
| 3    | ค่าตัวแปรที่เป็นตัวเลขเป็นจำนวนไม่ใช่ 0 | `kumamon = 1112`<br>`if(kumamon)`             |
| 4    | ค่า Boolean ในตัวแปรเป็นจริง      | `kumamon = true`<br>`if(kumamon)`             |
| 5    | ค่า logic เป็นจริง               | `if(true or false)`                           |

## Nested `IF` Statement
บางครั้ง น้องๆอาจจะต้องมีหลายเงื่อนไขหน่อย เพื่อให้น้องทำงานได้นั่นเอง<br>
น้องๆอาจจะเขียนแบบนี้ เพื่อให้มีหลายเงื่อนไขก็ได้ครับ
```python
if (first_name == "Kumamon"):
    if (age == 21):
        print("My name is Kumamon")
```
แต่มันก็ยังดูเยอะไปนะ อิอิ<br>
ในช่วงต่อไป เราก็จะมาใช้งาน **Logical Operator** กันดีกว่า

## Introduction to `ELSE` statement
น้องๆอาจจะสงสัยว่า ถ้าทำแบบนี้ไม่ได้ ก็ทำแบบนี้แทนได้มั้ย<br>
ตัว Statement ELSE ก็มาช่วยน้องแล้วจ้า

::: warning
`ELSE` Statement จะต้องใช้กับ `IF` ทุกครั้ง<br>
และอยู่หลัง `IF` เท่านั้น
:::

ตัวอย่างการใช้งาน else
```python
if (kumamon == "Cute"):
    print("Cute Kumamon")
else:
    print("I don't understand")
```
น้องจะเห็นว่า การเขียน else นั้นจะ
- เขียนไว้หลัง if statement
- else ก็จะไม่มีสมการเพื่อมาทดสอบ logic อยู่เลย **เพราะว่า else จะทำงานทันที หากว่า if ไม่ทำงาน**

แล้วถ้าน้องเจอโจทย์แบบนี้หล่ะ
- หากว่า kumamon = "Cute" ก็ให้ออก "Cute Kumamon"
- หากว่า kumamon = "Happy" ก็ให้ออก "Happy Kumamon"
- หากว่า kumamon = "Funny" ก็ให้ออก "Funny Kumamon"
- แต่ถ้าไม่เหมือนอะไรเลย ก็ให้ออก "I don't understand"

น้องก็สามารถเขียนภาษา Python ได้ดังนี้
```python
if (kumamon == "Cute"):
    print("Cute Kumamon")
else:
    if (kumamon == "Happy"):
        print("Happy Kumamon")
    else:
        if (kumamon == "Funny"):
            print("Funny Kumamon")
        else:
            print("I don't understand")
```
แต่! มัน! อ่าน! ไม่! ออก! โหวยยยยยยยยย<br>
ไม่เอา ไม่เขียนแบบนี้<br>
ภาษา Python ยังมาช่วยน้องได้ ด้วยการใช้ keyword นั่นก็คือ `elif` นั่นเองครับ

## Introduction to `ELIF` statement
เนื่องจากว่าคนสร้าง Python เค้าคงนอนดี้นๆกับพื้นเลย ถ้าจะเขียน if แล้ว else แล้ว if แล้ว else เยอะแยะ<br>
เค้าก็เลยเอาคำว่า `if` และ `else` มารวมร่างกัน เป็น `elif` นั่นเอง (ไม่ใช่มดเขียวแน่ๆอ่ะครับ พี่บอกไว้ก่อน)

วิธีการใช้งาน `elif` ก็แสนจะง่ายดาย เหมือน `if` เลยจ้า
```python
if (kumamon == "Cute"):
    print("Hello World")
elif (kumamon == "Hello Kumamon"):
    print("Go straight to jail")
else:
    print("I don't understand")
```

น้องๆก็จะสังเกตว่า
- `elif` จะอยู่หลังการทำ `if` ก่อนทุกครั้ง ไม่ว่าจะเป็นกรณีใดๆทั้งสี้น
- Indentation อยู่บรรทัดเดียวกันกับ if และ else เลย
