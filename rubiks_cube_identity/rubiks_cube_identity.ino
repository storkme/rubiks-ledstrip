#include <Adafruit_NeoPixel.h>

//arduino output pin
#define PIN            2
//number of px in total in the strip
#define NUMPIXELS      288

#define OFFSET         4
#define PADDING        2
#define WIDTH          5

// you may need to modify the below if your strip is setup different to mine
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

int c[54] = {
    0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,
    2,2,2,2,2,2,2,2,2,
    3,3,3,3,3,3,3,3,3,
    4,4,4,4,4,4,4,4,4,
    5,5,5,5,5,5,5,5,5
};

uint32_t colors[6] = {
    0xaaaaaa, //w
    0xaa0000, //r
    0x0000aa, //b
    0xaaaa00, //y
    0xaa3300, //o
    0x00aa22 //g
};

int t = 0;

void f(int *c, int *c1) {
    c1[20] = c[36];
    c1[21] = c[37];
    c1[22] = c[38];

    c1[36] = c[51];
    c1[37] = c[52];
    c1[38] = c[45];

    c1[13] = c[20];
    c1[14] = c[21];
    c1[15] = c[22];

    c1[45] = c[15];
    c1[51] = c[13];
    c1[52] = c[14];

    rotateSide(c, c1, 0);
}
void b(int *c, int *c1) {
    c1[9] = c[47];
    c1[10] = c[48];
    c1[11] = c[49];
    c1[18] = c[11];
    c1[24] = c[9];
    c1[25] = c[10];
    c1[40] = c[24];
    c1[41] = c[25];
    c1[42] = c[18];
    c1[47] = c[40];
    c1[48] = c[41];
    c1[49] = c[42];
    rotateSide(c, c1, 27);
}
void u(int *c, int *c1) {
    c1[0] = c[45];
    c1[1] = c[46];
    c1[2] = c[47];
    c1[18] = c[0];
    c1[19] = c[1];
    c1[20] = c[2];
    c1[27] = c[18];
    c1[28] = c[19];
    c1[29] = c[20];
    c1[45] = c[27];
    c1[46] = c[28];
    c1[47] = c[29];
    rotateSide(c, c1, 9);
}
void d(int *c, int *c1) {
    c1[4] = c[22];
    c1[5] = c[23];
    c1[6] = c[24];
    c1[22] = c[31];
    c1[23] = c[32];
    c1[24] = c[33];
    c1[31] = c[49];
    c1[32] = c[50];
    c1[33] = c[51];
    c1[49] = c[4];
    c1[50] = c[5];
    c1[51] = c[6];
    rotateSide(c, c1, 36);
}
void l(int *c, int *c1) {
    c1[0] = c[9];
    c1[6] = c[15];
    c1[7] = c[16];
    c1[9] = c[31];
    c1[15] = c[29];
    c1[16] = c[30];
    c1[29] = c[42];
    c1[30] = c[43];
    c1[31] = c[36];
    c1[36] = c[0];
    c1[42] = c[6];
    c1[43] = c[7];
    rotateSide(c, c1, 18);
}
void r(int *c, int *c1) {
    c1[2] = c[38];
    c1[3] = c[39];
    c1[4] = c[40];
    c1[11] = c[2];
    c1[12] = c[3];
    c1[13] = c[4];
    c1[27] = c[13];
    c1[33] = c[11];
    c1[34] = c[12];
    c1[38] = c[33];
    c1[39] = c[34];
    c1[40] = c[27];
    rotateSide(c, c1, 45);
}

void rotateSide(int *c, int *c1, int o) {
  c[o] = c1[o + 6];
  c[o + 1] = c1[o + 7];
  c[o + 2] = c1[o];
  c[o + 3] = c1[o + 1];
  c[o + 4] = c1[o + 2];
  c[o + 5] = c1[o + 3];
  c[o + 6] = c1[o + 4];
  c[o + 7] = c1[o + 5];
}

void setup() {
  pixels.begin();
}

void loop() {

  char pattern[] = "rrruuurrrfffufuuurrrfrfffuuuruur";
  //frame counter
  t = t + 1;
  if (t == strlen(pattern)) {
    t = 0;
  }
  
  int c1[54] = {};
  memcpy(c1, c, sizeof(c));
  char cur = pattern[t];
  
  //could probably use function pointers here but i'm not good at c
  if(cur == 'r') {
    r(c1, c);
  } else if (cur == 'u') {
    u(c1, c);
  } else if(cur = 'f') {
    f(c1, c);
  }
  
  for (int i=0; i<6; i++) {
    for(int j=0;j<9;j++) {
      int colorIdx = c[i * 9 + j];
      for(int k=0;k<WIDTH;k++) {
        pixels.setPixelColor(OFFSET + (i * PADDING) + (i * 9 * WIDTH) + (j * WIDTH) + k, colors[colorIdx]);
      }
    }
  }
  
  pixels.show();
  
  delay(500);
  //pause once we've arrived back at the 'solved' state
  if(t == 0) {
     delay(2000);
  }
}
