# การทำซ้ำ
## ลูป For
ลูปประเภท `for` นั่นเอาไว้ใช้ทำ loop ที่มีปริมาณ loop อธิบายไว้<br>
เช่นให้ loop 5 ครั้ง หรือ loop ตามขนาดความยาวของตัวอักษร (String)

นี่ก็คือวิธีใช้งาน for loop ครับ
```python
for <variable> in <list or string>:
```

ถ้ายังใช้ไม่เป็น ก็มีตัวอย่างมาให้ดูครับ
```python
for i in range(10):
    print(i, end=" ")

# Returns 0 1 2 3 4 5 6 7 8 9
```

จุดที่น้องๆควรสังเกตนั่นก็คือ `<variable>` และ `range(10)` ครับ
- โดยตัวแปรที่พี่เลือก​ (นั่นก็คือ i) ก็สามารถถูกเรียกได้ตลอด ซึ่งตัว i นี้ก็จะเพื่มไปเรื่อยๆ ตาม range ครับ พี่เลยสามารถที่จะเขียน `print(i)` ได้ และออกมาเป็น 0 1 2 3 ... นั่นเอง
- range(10) น้องๆก็อาจจะคุ้นๆกับ [] อ่ะเนอะ ที่บอกว่าให้เรื่มจุดไหน หยุดจุดไหน ก็จะคล้ายๆกับ range() นะครับ โดยหากว่าน้องๆใส่ parameter ไปเพียงอันเดียว มันก็จะเรื่มตั้งแต่ 0 ให้ จนถึงตัวเลขที่น้องใส่เข้าไป ในกรณีนี้ก็คือ 10 - 1 = 9 นั่นเอง

::: warning อย่าลืม
ว่า array เรื่มที่ 0 นะจ๊ะ
:::

หากน้องๆยังไม่เข้าใจ keyword [`in`]() และฟังก์ชั่น [`range()`]() ก็จะอยู่หลังๆเลยจ้า

**โจทย์ปัญหา** อยากวนเท่ากับตัวเลขในตัวแปร
```python
age = 21
for i in range(age):
    print("My age is : %d years old" %i)
```

**โจทย์ปัญหา** อยาก loop เท่าความยาวของ string
```python
first_name = "Kumamon"
for i in range(len(first_name)):
    print(i)
```
โดยน้องสามารถคำนวณความยาวของ string โดยการใช้ `len()` ได้นะครับ และตัว `len()` ก็จะคืนค่าออกมาเป็นตัวเลข แล้วตัวฟังก์ชั่น `range()` ก็จะไปรับตัวเลขมา เพื่อมารันจำนวนนั้นๆให้ครับ

**โจทย์ปัญหา** อยากให้ปรี้นท์ตัวอักษรแต่ละตัวออกมาแทน
```python
for i in "Kumamon":
    print(i, end=" ")

# Returns "K u m a m o n"
```

**โจทย์ปัญหา** อยากใช้งาน loop เพื่อปรี้นท์ข้อมูลใน array ออกมาทีละตัว
```python
text = [1,2,3,4,5]
for i in text:
    print(i, end=" ")

# Returns "1 2 3 4 5"
```

## Loop ซ้อน Loop
![](http://etutorials.org/shared/images/tutorials/tutorial_23/09inf08.gif)
โดย loop ทั่วๆไปก็สามารถทำ loop ซ้อนๆกันได้ เพื่อความเฟี้ยวฟ้าว หรือเพื่อประหยัดเวลาของน้องๆเอง

หลักการก็คือ ตัวโปรแกรมก็จะรัน loop แรก แล้วมันก็ไปเจอ loop อีกอันนึง เลยเข้าไปทำ loop ที่อยู่ข้างในกว่า

This program will run to the total of 2 x 2 x 2 = 8 times.
```python
for i in range(2, 5):
    for j in range(2, 5):
        print("%d x %d = %d" %(i, j, i * j))
```

ก็จะออกผลลัพท์มาเป็น
```
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
```

### Using For loops to call function
```python
def main():
    for i in range(2):
        for j in range(2):
            kumamon(i, j)

def kumamon(num1, num2):
    print(num1 + num2)

main()

# Returns
0
1
1
2
```

---

## การใช้ keyword `IN`
`in` keyword is pretty much like equal sign. But it can return true if **some** element does qualify.

```python
How to use:
<text> in <text>

Example
"kumamon" in "kumamon is happy" # Returns True
"kumamoto" in "kumamon is happy" # Returns False
```
in is a tester that find the text within the text. Similarly to .find()

**การเอา `IN` ไปใช้กับ array**
```python
Example

shopping_list = ['Apple', 'Banana', 'Peanut', 'Butter', 'Jelly']

"Apple" in shopping_list # Returns true
"Kumamon" in shopping_list # Returns false
```

## การใช้ฟังก์ชั่น `range()`
การใช้ฟังก์ชั่นนี้ ก็จะคืนค่าออกมาเป็น list ที่มีตัวเลข (integer) เรียงตามที่ให้ parameter มา
```python
How to use:
range(<stop>)
range(<start>, <stop>)
range(<start>, <stop>, <step>)

Example
range(10)       # Returns 0,1,2,3,4,5,6,7,8,9
range(1, 10)    # Returns 1,2,3,4,5,6,7,8,9,10
range(1, 10, 2) # Returns 2,4,6,8,10
```
range is a number array that continues the number as you like

**ตารางเปรียบเทียบ**

| Loop Type / Sample Environment | **For**                    | **While**                                    |
| ------------------------------ | -------------------------- | -------------------------------------------- |
| Requires to start              | Amount of loops            | Argument that still true                     |
| Loop Control                   | Using in, range() or array | Using break or making argument becomes false |
| Stop when                      | Loop amount is done        | When argument is false                       |
| Made for                       | Exact number of loops      | Argument that can become false               |

## ลูป While
ลูปประเภท `WHILE` ก็คือการ **วนเมื่อเงื่อนไขยังคงถูกต้อง** และจะทำการหยุดเมื่อเงื่อนไขไม่เป็นจริงแล้ว หากน้องยังไม่เข้าใจก็ให้อ่านใหม่ครับ แต่ถ้าเข้าใจแล้วก็อ่านเรื่องต่อไปได้เลย

!> **คำแนะนำ**<br>
เนื่องจากว่าอันนี้มันง่ายที่สุด พี่เลยแนะนำว่าให้มาลองเล่นอันนี้ให้่ชำนาญก่อนนะครับ ก่อนที่จะไปหา Loop อีกประเภทนึง

## วิธีการใช้ WHILE loop
```python
while <arguments>:
    # และจะรันโค้ดด้านล่างเมื่อ <argument> ยังเป็นจริง
```

ตัวอย่างเช่น
```python
count = 10
while count > 5:
    print(count, end=" ")
    count = count - 1
```

ก็จะได้ค่าออกมาเป็น
```
10 9 8 7 6
```

## Infinite Loop
![](http://3.bp.blogspot.com/_F7vpRIjAvYI/TIU7VpNlbzI/AAAAAAAABoI/s2clJ4LoWO0/s1600/image.png)

น้องอาจจะยังไม่เข้าใจว่า Infinite Loop คืออะไร<br>
1 Infinite Loop เป็นบ้านของ Apple ครับ<br>

หยอกๆ Infinite Loop ก็คือ Loop ที่ัยังไม่จบนั่นเอง<br>
เนื่องจากอะไรนั่นเหรอ ก็เพราะว่าเงื่อนไขยังไม่เป็นจริงซักทียังไงหล่ะ มันก็เลยเกิด

และเมื่อเกิดแล้ว น้องก็จะหยุดมันไม่ได้ครับ ยกเว้นว่าต้องทำการหยุดด้วยการ Terminate โปรแกรม


เอาเป็นว่าไปดูตัวอย่างดีกว่าครับ

```python
kumamon = "cute"
while (kumamon = "cute"):
  print("You are in an infinite loop")

# Returns
You are in an infinite loop
You are in an infinite loop
You are in an infinite loop
You are in an infinite loop
...
...
...
...
# แล้วมันไม่หยุดเลยครับ จริงๆนะ
```
ถ้าสังเกตดีๆ บรรทัดแรกพี่ได้ประกาศตัวแปร kumamon ให้เท่ากับ "cute" มันก็ไม่มีอะไรแปลกประหลาด
บรรทัดที่ 2 พี่ได้เขียนว่า "เมื่อตัวแปร kumamon เท่ากับ "cute" แล้วก็จะให้วน loop" ก็ไม่แปลกอะไร แล้ว loop ก็เรื่มครับ เพราะว่าเป็นจริง

แต่ว่า ไม่มีบรรทัดไหนมีการเปลี่ยนตัวแปร kumamon เลย ทำให้ "เมื่อตัวแปร kumamon เท่ากับ "cute" แล้วก็จะให้วน loop" ยังคงเป็นจริงอยู่ ทำให้วนอยู่แบบนี้แหละครับ ไม่มีใครหยุดมันเลย

## คำสั่งอื่นๆที่เกี่ยวข้อง (Break & Continue)
เนื่องจากว่า น้องต้องการทำ loop แต่ก็อยากที่จะข้าม หรือหยุด loop เมื่อถึงเงื่อนไขที่น้องตั้งเพื่มขึ้นมานั่นเอง<br>
ใน lecture นี้ก็จะสอน keyword ทืี่น้องเอาไว้คุม loop 2 อัน นั่นก็คือ
- Break
- Continue

### Using break
เป็น keyword ที่ว่า เมื่อ loop ถึงบรรทัด break นี้ได้ก็จะทำการออก loop นั้นทันที

!> **ข้อระวัง**<br>ออกแค่ใน loop ที่ตัวเองอยู่ หากว่าอยู่ใน loop ซ้อน loop ก็จะออก loop ที่ตัวเองอยู่ แต่ไม่ได้ออก loop ที่วนอยู่ภายนอก

ตัวอย่างการใช้ `break`
```python
kumamon = "cute"
age = 21

while (kumamon == "cute"):
    print("I am happy")
    age += 1

    if (age == 25):
        break
```

ก็จะออกผลมาว่า
```
I am happy
I am happy
I am happy
I am happy
```
เพราะได้วน 4 รอบ แต่ทำไมวนได้ 4 รอบหล่ะ

รอบแรกค่า age = 21 และก็ได้เพื่มในบรรทัดที่ 6 เป็น 22 ครับ และบรรทัดที่ 8 ก็ไม่เป็นจริง เพราะว่า 22 ไม่เท่ากับ 25 ครับ<br>
รอบที่ 2 ก็เช่่นกัน age = 22 และก็ได้เพื่มในบรรทัดที่ 6 เป็น 23 ครับ และบรรทัดที่ 8 ก็ไม่เป็นจริง เพราะว่า 23 ไม่เท่ากับ 25 ครับ

วนไปถึงรอบที่ 4 age = 24 และก็ได้เพื่มในบรรทัดที่ 6 เป็น 25 ครับ และบรรทัดที่ 8 ก็เป็นจริง เพราะว่า 25 เท่ากับ 25 แล้ว จึงถึงบรรทัดที่มี `break` ได้ ทำให้โปรแกรมออกจาก loop มานั่นเอง

### Using continue
โดยตัว continue นั้นมีความแตกต่างกับ break อยู่นิดเดียว นั่นก็คือ หากถึงบรรทัดนั่นแล้ว ก็จะกลับไปรัน loop ใหม่ โดยทำให้ข้ามบรรทัดที่จะทำงานหลังมันทันที

ถ้ายังไม่เข้าใจก็ไปดูกันครับ
```python
i = 0
while (true):
    i += 1
    if (i == 5):
        continue

    print(i, end=" ") # ในบรรทัดนี้ พี่มงได้ใส่ parameter `end = " "` เข้าไปด้วย เพื่อให้มันปรี้นท์ " " แทนบรรทัดใหม่ครับ

print("Loop is complete!")
```
ก็จะแสดงผลออกมาดังนี้ครับ
```
"0 1 2 3 4 6 7 8 9 Loop is complete!"
```
น้องก็จะเห็นว่า พอ i = 5 แล้ว ก็จะไม่รันโค้ดด้านล่างเลย (บรรทัดที่ 7 เป็นต้นไป)<br>
แต่เนื่องจากว่าบรรทัดที่ 9 นั้นไม่ได้อยู่ใน loop เลยรันได้อย่างปกติดี

พี่ก็เลยทำสรุปเอาไว้สำหรับ break และ continue ดังนี้ครับ

|                | **break**                | **continue**                      |
| -------------- | ------------------------ | --------------------------------- |
| **เพื่อเอาไว้**   | หยุด loop                 | เรื่ม loop ใหม่ทันที                   |
| **มีหน้าที่หลักคือ** | เพื่อเอาไว้กัน infinite loop | เพื่อหยุดให้ loop ทำงานในส่วนที่ไม่เกี่ยวข้อง |
